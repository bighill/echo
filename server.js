const express = require("express");

const app = express();

app.get("/:message", (req, res) => {
  return res.json({ message: req.params.message });
});

app.get("/", (req, res) => {
  return res.json({ message: "echo" });
});

app.listen(1122, () => {
  console.log("Echo server listening on port 1122");
});
