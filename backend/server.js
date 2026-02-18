const express = require("express");
const fs = require("fs-extra");
const path = require("path");
const { exec } = require('child_process');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// ===== ADMIN PASSWORD (从环境变量读取，更安全) =====
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "heritage2025";

// ===== File Paths (只保留 clicks.json) =====
const clicksFile = path.join(__dirname, "clicks.json");

// ===== 临时存储验证 tokens (生产环境应使用 Redis) =====
const validTokens = new Map(); // 格式: { token: { createdAt: timestamp } }

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// ===== Initialize clicks.json =====
fs.pathExists(clicksFile).then(exists => {
  if (!exists) fs.writeJson(clicksFile, { totalClicks: 0 }, { spaces: 2 });
});

// ========================================
// PUBLIC APIs (无需验证)
// ========================================

// 追踪测验按钮点击（用于计算 completion rate）
app.post("/api/track-click", async (req, res) => {
  try {
    const clicksData = await fs.readJson(clicksFile).catch(() => ({ totalClicks: 0 }));
    clicksData.totalClicks += 1;
    await fs.writeJson(clicksFile, clicksData, { spaces: 2 });
    
    res.json({ 
      status: "success", 
      totalClicks: clicksData.totalClicks 
    });
  } catch (err) {
    console.error("Error tracking click:", err);
    res.status(500).json({ status: "error", message: err.message });
  }
});

// 获取点击统计（用于前端计算 completion rate）
app.get("/api/get-clicks", async (req, res) => {
  try {
    const clicksData = await fs.readJson(clicksFile).catch(() => ({ totalClicks: 0 }));
    res.json({ totalClicks: clicksData.totalClicks });
  } catch (err) {
    console.error("Error reading clicks:", err);
    res.status(500).json({ status: "error", message: err.message });
  }
});

// ========================================
// ADMIN AUTH API (密码验证)
// ========================================

app.post("/api/admin/verify", (req, res) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({ 
      success: false, 
      message: "Password is required" 
    });
  }
  
  // 验证密码
  if (password === ADMIN_PASSWORD) {
    // 生成随机 token (32 字节)
    const token = crypto.randomBytes(32).toString('hex');
    
    // 存储 token 及创建时间（15分钟有效期）
    validTokens.set(token, {
      createdAt: Date.now(),
      expiresAt: Date.now() + (15 * 60 * 1000) // 15分钟后过期
    });
    
    console.log(`✅ Admin token generated: ${token.substring(0, 8)}...`);
    
    res.json({ 
      success: true, 
      token: token,
      expiresIn: 900 // 秒
    });
  } else {
    // 密码错误
    console.warn(`❌ Failed admin login attempt`);
    res.status(401).json({ 
      success: false, 
      message: "Invalid password" 
    });
  }
});

// ========================================
// ADMIN TOKEN 验证中间件
// ========================================

function requireAdminToken(req, res, next) {
  const token = req.headers['x-admin-token'];
  
  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: "Admin token required. Please login first." 
    });
  }
  
  // 检查 token 是否存在且未过期
  const tokenData = validTokens.get(token);
  
  if (!tokenData) {
    return res.status(401).json({ 
      success: false, 
      message: "Invalid token. Please login again." 
    });
  }
  
  if (Date.now() > tokenData.expiresAt) {
    validTokens.delete(token); // 删除过期 token
    return res.status(401).json({ 
      success: false, 
      message: "Token expired. Please login again." 
    });
  }
  
  // Token 有效，继续处理请求
  next();
}

// ========================================
// ADMIN-ONLY APIs (需要有效 token)
// ========================================

// 注销（删除 token）
app.post("/api/admin/logout", requireAdminToken, (req, res) => {
  const token = req.headers['x-admin-token'];
  validTokens.delete(token);
  console.log(`🔓 Admin token revoked`);
  res.json({ success: true, message: "Logged out successfully" });
});

// 检查 token 有效性
app.get("/api/admin/verify-token", requireAdminToken, (req, res) => {
  const token = req.headers['x-admin-token'];
  const tokenData = validTokens.get(token);
  
  res.json({ 
    success: true, 
    expiresAt: tokenData.expiresAt,
    remainingTime: Math.floor((tokenData.expiresAt - Date.now()) / 1000)
  });
});

// ========================================
// Token 清理任务 (每小时清理过期 token)
// ========================================

setInterval(() => {
  const now = Date.now();
  let expiredCount = 0;
  
  for (const [token, data] of validTokens.entries()) {
    if (now > data.expiresAt) {
      validTokens.delete(token);
      expiredCount++;
    }
  }
  
  if (expiredCount > 0) {
    console.log(`🧹 Cleaned up ${expiredCount} expired tokens`);
  }
}, 60 * 60 * 1000); // 每小时执行一次

// ========================================
// Start Server
// ========================================

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}/index.html`;
  console.log(`✅ Server running at http://localhost:${PORT}`);
  //console.log(`🔒 Admin password: ${ADMIN_PASSWORD}`);
  console.log(`🔐 Admin login: POST /api/admin/verify`);
  console.log(`📊 Data source: Supabase only (no local JSON files)`);
  console.log(`Opening ${url}...`);
  
  exec(`start ${url}`, (err) => {
    if (err) {
      console.log('Could not auto-open browser. Please visit:', url);
    }
  });
});