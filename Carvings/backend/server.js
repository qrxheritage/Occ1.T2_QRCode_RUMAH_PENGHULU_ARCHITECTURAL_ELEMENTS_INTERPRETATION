const express = require("express");
const fs = require("fs-extra");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

const submissionsFile = path.join(__dirname, "submissions.json");
const clicksFile = path.join(__dirname, "clicks.json");

app.post("/submit-quiz", async (req, res) => {
  try {
    const data = req.body;

    let submissions = await fs.readJson(submissionsFile).catch(() => []);
    let clicksData = await fs.readJson(clicksFile).catch(() => ({ totalClicks: 0 }));

    const currentClicks = data.currentClicks || 0;
    clicksData.totalClicks += currentClicks;

    const newSubmission = {
      timestamp: new Date().toISOString(),
      visitorID: data.visitorID || "Anonymous",
      score: data.score || 0,
      percentage: data.percentage || 0,
      question1: data.question1 || null,
      question2: data.question2 || null,
      question3: data.question3 || null,
      question4: data.question4 || null,
      currentClicks,
      totalClicks: clicksData.totalClicks
    };

    submissions.push(newSubmission);

    await fs.writeJson(submissionsFile, submissions, { spaces: 2 });
    await fs.writeJson(clicksFile, clicksData, { spaces: 2 });

    const totalSubmissions = submissions.length;
    const totalPercentage = submissions.reduce((sum, s) => sum + s.percentage, 0);
    const averagePercentage = totalSubmissions ? totalPercentage / totalSubmissions : 0;
    const completionRate = clicksData.totalClicks ? totalSubmissions / clicksData.totalClicks : 0;

    res.json({
      status: "success",
      averagePercentage,
      completionRate,
      totalSubmissions,
      totalClicks: clicksData.totalClicks
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
