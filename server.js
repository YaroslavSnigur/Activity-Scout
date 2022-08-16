const express = require("express");
const logger = require("morgan");
const path = require("path");
require("dotenv").config();
require("./backend/config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use("/api/posts", require("./backend/routes/posts"));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
