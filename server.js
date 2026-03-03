const express = require('express');
const os = require('os');

const app = express();
const port = 80;

const version = process.env.VERSION || "unknown";
const env = process.env.ENV || "dev";

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 GitOps Microservice</h1>
    <p><strong>Version:</strong> ${version}</p>
    <p><strong>Environment:</strong> ${env}</p>
    <p><strong>Pod:</strong> ${os.hostname()}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
