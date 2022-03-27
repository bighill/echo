const express = require("express");
const app = express();
const PORT = 8080;

app.get("/:message", (req, res) => {
  return res.json({ message: req.params.message + " !!!" });
});

app.get("/", (req, res) => {
  return res.json({ message: "echo" });
});

app.listen(PORT, () => {
  console.log(`Echo server listening on port ${PORT}`);
});
