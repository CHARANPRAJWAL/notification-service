const express = require("express");
const app = express();

app.get("/notify", (req, res) => {
  res.send("notify");
});
app.listen("7000", () => {
  console.log("SERVER STARTED ");
});
