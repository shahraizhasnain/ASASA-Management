const locationRoute = require("express").Router();
const locationController = require("../controller/locationController");
locationRoute.get("/getTreeData/:Id", locationController._getTreeData);

module.exports = { locationRoute };
