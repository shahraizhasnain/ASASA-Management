const db = require("../config/database");
var saveSaleModel = require("../model/saveSaleModel");

let _getAllSale = (req, res) => {
  db.execcuteStoredProcedure("_GetAllSale", []).then(function (result) {
    console.log(result.recordset);
    return res.json(result.recordset);
  });
};

let _saveSale = (req, res) => {
  var sale = new saveSaleModel(req);
  db.execcuteStoredProcedure("_SaveSale", sale).then(function (result) {
    return res.json(result);
  });
};

module.exports = { _getAllSale, _saveSale };
