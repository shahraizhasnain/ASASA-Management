const sql = require("mssql");

var dbConfig = {
  user: "sa",
  password: "MyDe6147",
  server: "DESKTOP-94PNHV3\\SQLEXPRESS",
  database: "AssetManagement",
};

const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();

// ================================== Sample ==================================

// const params = [
//   { key: "Id", dataType: sql.VarChar, value: "2|" },
//   { key: "category", dataType: sql.VarChar, value: "CT1-Category 1|" },
//   { key: "days", dataType: sql.VarChar, value: "Mon|Tue|" },
//   { key: "language", dataType: sql.VarChar, value: "En" }
// ];

async function execcuteStoredProcedure(procedureName, procedureParameters) {
  await poolConnect;
  try {
    const procedure = pool.request();
    procedureParameters.forEach((params) => {
      procedure.input(params.key, params.dataType, params.value);
    });
    const result = await procedure.execute(procedureName);
    return { code: 0, data: result };
  } catch (exception) {
    return { code: "-1", data: "Exception occurred" };
  }
}

module.exports = { sql, execcuteStoredProcedure };
