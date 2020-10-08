const saleRoute = require("express").Router();
const saleController = require("../controller/saleController");

saleRoute.get("/getAllSale", saleController._getAllSale);
saleRoute.post("/saveSale", saleController._saveSale);

module.exports = { saleRoute };
