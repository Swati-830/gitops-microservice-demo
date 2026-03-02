const express = require("express");
const os = require("os");

const app = express();
const PORT = 80;
const VERSION = process.env.APP_VERSION || "v1";
const ENV = process.env.NODE_ENV || "dev";

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 GitOps Microservice</h1>
    <p><b>Version:</b> ${VERSION}</p>
    <p><b>Environment:</b> ${ENV}</p>
    <p><b>Hostname:</b> ${os.hostname()}</p>
  `);
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.get("/version", (req, res) => {
  res.json({ version: VERSION });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
