const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const locationRoute = require("./routes/locationRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/asasa/location", locationRoute.locationRoute);
app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
