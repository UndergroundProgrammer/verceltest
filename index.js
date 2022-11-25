const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("welcome to dashboard");
});
app.get("/", (req, res) => {
  res.send("Server is running!!!");
});
app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
