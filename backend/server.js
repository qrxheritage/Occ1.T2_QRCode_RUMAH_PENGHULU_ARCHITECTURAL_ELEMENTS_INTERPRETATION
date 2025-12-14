const express = require("express");
const fs = require("fs-extra");
const path = require("path");
const { Parser } = require('@json2csv/plainjs');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// ===== ADMIN TOKEN (change this!) =====
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "heritage2024";

// ===== File Paths =====
const submissionsFile = path.join(__dirname, "submissions.json");
const clicksFile = path.join(__dirname, "clicks.json");
const statsFile = path.join(__dirname, "quiz_stats.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// ===== Initialize JSON Files =====
fs.pathExists(clicksFile).then(exists => {
  if (!exists) fs.writeJson(clicksFile, { totalClicks: 0 }, { spaces: 2 });
});

fs.pathExists(statsFile).then(exists => {
  if (!exists) {
    fs.writeJson(statsFile, {
      totalSubmissions: 0,
      sumOfPercentages: 0,
      averagePercentage: 0,
      completionRate: 0 
    }, { spaces: 2 });
  }
});

fs.pathExists(submissionsFile).then(exists => {
  if (!exists) fs.writeJson(submissionsFile, [], { spaces: 2 });
});

// ========================================
// PUBLIC APIs (No Token Required)
// ========================================

// Track quiz button clicks
app.post("/api/track-click", async (req, res) => {
  try {
    const clicksData = await fs.readJson(clicksFile).catch(() => ({ totalClicks: 0 }));
    clicksData.totalClicks += 1;
    await fs.writeJson(clicksFile, clicksData, { spaces: 2 });
    
    const stats = await fs.readJson(statsFile).catch(() => ({ 
      totalSubmissions: 0, 
      completionRate: 0 
    }));
    
    const totalSubmissionsCount = stats.totalSubmissions;
    const totalClicks = clicksData.totalClicks;
    stats.completionRate = totalClicks > 0 
         ? (totalSubmissionsCount / totalClicks) * 100
         : 0;
    await fs.writeJson(statsFile, stats, { spaces: 2 });

    res.json({ 
      status: "success", 
      totalClicks: clicksData.totalClicks, 
      completionRate: stats.completionRate 
    });
  } catch (err) {
    console.error("Error saving click:", err);
    res.status(500).json({ status: "error", message: err.message });
  }
});

// Submit quiz answers
app.post("/api/submit-quiz", async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ status: "error", message: "No data provided" });
    }

    const submissions = await fs.readJson(submissionsFile).catch(() => []);
    const stats = await fs.readJson(statsFile).catch(() => ({ 
      totalSubmissions: 0, 
      sumOfPercentages: 0, 
      averagePercentage: 0, 
      completionRate: 0 
    }));
    
    const submissionIndex = submissions.length;
    const visitorID = data.visitorID || `anon-${Math.floor(Math.random() * 1000000)}`;
    
    const newSubmission = {
      submissionIndex,
      timestamp: new Date().toISOString(),
      visitorID,
      score: data.score || 0,
      percentage: data.percentage || 0,
      question1: data.question1 || null,
      question2: data.question2 || null,
      question3: data.question3 || null,
      question4: data.question4 || null,
      question5: data.question5 || null,  
      question6: data.question6 || null   
    };

    submissions.push(newSubmission);
    await fs.writeJson(submissionsFile, submissions, { spaces: 2 });

    stats.totalSubmissions += 1;
    stats.sumOfPercentages += newSubmission.percentage;
    stats.averagePercentage = stats.sumOfPercentages / stats.totalSubmissions;

    const clicksData = await fs.readJson(clicksFile).catch(() => ({ totalClicks: 0 }));
    const totalSubmissionsCount = stats.totalSubmissions;
    const totalClicks = clicksData.totalClicks;
    stats.completionRate = totalClicks > 0 
        ? (totalSubmissionsCount / totalClicks) * 100
        : 0;

    await fs.writeJson(statsFile, stats, { spaces: 2 });

    res.json({
      status: "success",
      totalSubmissions: stats.totalSubmissions,
      averagePercentage: stats.averagePercentage,
      completionRate: stats.completionRate
    });
  } catch (err) {
    console.error("Error submitting quiz:", err);
    res.status(500).json({ status: "error", message: err.message });
  }
});

// Get quiz statistics (optional - for displaying stats publicly)
app.get("/api/quiz-stats", async (req, res) => {
  try {
    const stats = await fs.readJson(statsFile).catch(() => ({
      totalSubmissions: 0,
      averagePercentage: 0,
      completionRate: 0
    }));
    res.json(stats);
  } catch (err) {
    console.error("Error reading stats:", err);
    res.status(500).json({ status: "error", message: "Failed to retrieve stats" });
  }
});

// ========================================
// ADMIN-ONLY APIs (Token Required)
// ========================================

// Middleware to check admin token
function requireAdminToken(req, res, next) {
  const token = req.headers['x-admin-token'];
  
  if (!token || token !== ADMIN_TOKEN) {
    return res.status(403).json({ 
      status: "error", 
      message: "Admin access required. Invalid or missing X-ADMIN-TOKEN header." 
    });
  }
  
  next();
}

// Export submissions as CSV
app.post("/api/admin/export-submissions", requireAdminToken, async (req, res) => {
  try {
    const submissions = await fs.readJson(submissionsFile).catch(() => []);

    if (submissions.length === 0) {
      return res.status(404).send("No submission data to export.");
    }

    const parser = new Parser();
    const csv = parser.parse(submissions);

    res.header("Content-Type", "text/csv");
    res.attachment("quiz_submissions.csv"); 
    res.send(csv);
    
  } catch (err) {
    console.error("Error exporting submissions:", err);
    res.status(500).json({ status: "error", message: "Failed to export submissions." });
  }
});

// Export stats as CSV
app.post("/api/admin/export-stats", requireAdminToken, async (req, res) => {
  try {
    const stats = await fs.readJson(statsFile).catch(() => ({
      totalSubmissions: 0,
      sumOfPercentages: 0,
      averagePercentage: 0,
      completionRate: 0
    }));

    const statsArray = [stats];
    const parser = new Parser();
    const csv = parser.parse(statsArray);

    res.header("Content-Type", "text/csv");
    res.attachment("quiz_stats.csv");
    res.send(csv); 
  } catch (err) {
    console.error("Error exporting stats:", err);
    res.status(500).json({ status: "error", message: "Failed to export stats." });
  }
});

// ========================================
// LEGACY ENDPOINTS (Keep for compatibility)
// ========================================

// Old endpoints redirect to new APIs
app.post("/save-click", (req, res) => {
  req.url = "/api/track-click";
  app.handle(req, res);
});

app.post("/submit-quiz", (req, res) => {
  req.url = "/api/submit-quiz";
  app.handle(req, res);
});

// Old export endpoints (GET) - kept for backward compatibility
app.get("/export/submissions",requireAdminToken, async (req, res) => {
  try {
    const submissions = await fs.readJson(submissionsFile).catch(() => []);
    if (submissions.length === 0) {
      return res.status(404).send("No submission data to export.");
    }
    const parser = new Parser();
    const csv = parser.parse(submissions);
    res.header("Content-Type", "text/csv");
    res.attachment("quiz_submissions.csv"); 
    res.send(csv);
  } catch (err) {
    console.error("Error exporting submissions:", err);
    res.status(500).json({ status: "error", message: "Failed to export data." });
  }
});

app.get("/export/stats",requireAdminToken, async (req, res) => {
  try {
    const stats = await fs.readJson(statsFile).catch(() => ({
      totalSubmissions: 0,
      sumOfPercentages: 0,
      averagePercentage: 0,
      completionRate: 0
    }));
    const statsArray = [stats];
    const parser = new Parser();
    const csv = parser.parse(statsArray);
    res.header("Content-Type", "text/csv");
    res.attachment("quiz_stats.csv");
    res.send(csv); 
  } catch (err) {
    console.error("Error exporting stats:", err);
    res.status(500).json({ status: "error", message: "Failed to export stats." });
  }
});

// ========================================
// Start Server
// ========================================

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}/MainPage.html`;
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📊 Admin token: ${ADMIN_TOKEN}`);
  console.log(`🔓 Public APIs: /api/track-click, /api/submit-quiz`);
  console.log(`🔒 Admin APIs: /api/admin/export-submissions, /api/admin/export-stats`);
  console.log(`Opening ${url}...`);
  
  exec(`start ${url}`, (err) => {
    if (err) {
      console.log('Could not auto-open browser. Please visit:', url);
    }
  });
});