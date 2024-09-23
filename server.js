const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const crudRoutes = require("./crud/routes/crudroutes");

// cors
app.use(cors());

// view the https request handling
app.use((req, res, next) => {
  console.log("path" + req.path + "method" + req.method);
  next();
});

// body  parser
app.use(bodyParser.json({}));

// DB connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "DB connected successfully and listening to" + process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));

// routes
app.use("/api/crud", crudRoutes);
