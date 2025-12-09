const express = require("express");
const fs = require("fs-extra");
const path = require("path");
// const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors());


const submissionsFile = path.join(__dirname, "submissions.json");
const clicksFile = path.join(__dirname, "clicks.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// ensure clicks.json exists
fs.pathExists(clicksFile).then(exists => {
  if (!exists) fs.writeJson(clicksFile, { totalClicks: 0 }, { spaces: 2 });
});

app.post("/save-click", async (req, res) => {
    try {
        const clicksData = await fs.readJson(clicksFile).catch(() => ({ totalClicks: 0 }));
        clicksData.totalClicks += 1;
        await fs.writeJson(clicksFile, clicksData, { spaces: 2 });
        res.json({ status: "success", totalClicks: clicksData.totalClicks });
    } catch (err) {
        console.error("Error saving click:", err);
        res.status(500).json({ status: "error", message: err.message });
    }
});

app.post("/submit-quiz", async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ status: "error", message: "No data provided" });
    }

    const submissions = await fs.readJson(submissionsFile).catch(() => []);

    const visitorID = data.visitorID || `anon-${Math.floor(Math.random() * 1000000)}`;
    const newSubmission = {
      timestamp: new Date().toISOString(),
      visitorID,
      score: data.score || 0,
      percentage: data.percentage || 0,
      question1: data.question1 || null,
      question2: data.question2 || null,
      question3: data.question3 || null,
      question4: data.question4 || null
    };

    submissions.push(newSubmission);
    await fs.writeJson(submissionsFile, submissions, { spaces: 2 });

    res.json({
      status: "success",
      totalSubmissions: submissions.length,
      averagePercentage: submissions.reduce((sum, s) => sum + s.percentage, 0) / submissions.length
    });
  } catch (err) {
    console.error("Error submitting quiz:", err);
    res.status(500).json({ status: "error", message: err.message });
  }
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});