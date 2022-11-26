const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("welcome to dashboard");
});
app.get("/", (req, res) => {
  res.send("Server is running!!!");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
