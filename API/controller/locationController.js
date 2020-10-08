const db = require("../config/database");
const model = require("../model/treeModel");

let _getTreeData = (req, res) => {
  let treeModel = model.treeModel(req);
  db.execcuteStoredProcedure("asm_getLocationTree", treeModel).then(
    (result) => {
      return res.json(result);
    }
  );
};

module.exports = { _getTreeData };
