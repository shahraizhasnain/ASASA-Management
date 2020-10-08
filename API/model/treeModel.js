const db = require("../config/database");

function treeModel(value) {
  return (params = [
    (this.Id = {
      key: "Id",
      dataType: db.sql.Int,
      value: value.params.Id,
    }),
  ]);
}

module.exports = { treeModel };
