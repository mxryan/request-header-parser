const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/whoami", (req, res) => {
  console.log(req);
  console.log("-----------------------------------------");
  console.log(req.headers);
  res.json(req.headers);
});

app.listen(PORT, ()=>console.log("Server is Listening"));
