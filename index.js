const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const ConnectDB = require("./database/database");
const multer = require("multer");

//connexion with mongoDB
 ConnectDB();

// App middlewares
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

// App routes
app.use("/image", require("./routes/uploader.routes"));

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}`);
});

module.exports = app;
