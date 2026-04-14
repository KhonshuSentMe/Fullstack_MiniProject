const express = require("express");
const cors = require("cors");
 
const app = express();
app.use(cors());
 
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});
 
app.get("/api/message", (req, res) => {
  res.json({ text: "Hello from backend!" });
});
 
app.listen(3001, () => {
  console.log("Server running on port 3001");
});