require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var createError = require("http-errors");
const cors = require("cors");


var customerRoute = require("./routes/customers");

const mongoose = require("mongoose");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//////////////

mongoose
  .connect(process.env.DBCONNECTION, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Successfully to the Database");
  })
  .catch(console.error);

app.use("/customers", customerRoute);

//Handle the error
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    success: false,
    message: err.message,
  });
});
// Undefined routes error handling

app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
