const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/whoami", (req, res) => {
  console.log(req.headers);
  res.json({
    software: req.headers["user-agent"],
    ipaddress: req.headers["x-forwarded-for"],
    language: req.headers["accept-language"]
  });
});

app.listen(PORT, ()=>console.log("Server is Listening"));
