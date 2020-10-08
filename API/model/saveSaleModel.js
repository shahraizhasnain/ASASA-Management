const db = require("../config/database");

function _mSaveSale(value) {
  return (params = [
    (this.id = {
      key: "PatientNumber",
      dataType: db.sql.NVarChar,
      value: value.body.id,
    }),
    (this.name = {
      key: "Name",
      dataType: db.sql.NVarChar,
      value: value.body.name,
    }),
    (this.referenceNumber = {
      key: "ReferenceNumber",
      dataType: db.sql.NVarChar,
      value: value.body.referenceNumber,
    }),
    (this.gender = {
      key: "Gender",
      dataType: db.sql.NVarChar,
      value: value.body.gender,
    }),
    (this.contact = {
      key: "ContactNumber",
      dataType: db.sql.NVarChar,
      value: value.body.contact,
    }),
    (this.age = {
      key: "Age",
      dataType: db.sql.NVarChar,
      value: value.body.age,
    }),
    (this.ageType = {
      key: "AgeType",
      dataType: db.sql.NVarChar,
      value: value.body.ageType,
    }),
    (this.address = {
      key: "Address",
      dataType: db.sql.NVarChar,
      value: value.body.address,
    }),
    (this.consultantName = {
      key: "ConsultantID",
      dataType: db.sql.Int,
      value: value.body.consultantName,
    }),
    (this.service = {
      key: "ServiceID",
      dataType: db.sql.Int,
      value: value.body.service,
    }),
    // this.totalAmount = {
    //   key: "ServiceID",
    //   dataType: db.sql.Int,
    //   value: value.body.totalAmount,
    // };

    (this.paidAmount = {
      key: "PaidAmount",
      dataType: db.sql.Decimal,
      value: value.body.paidAmount,
    }),
    (this.discount = {
      key: "Discount",
      dataType: db.sql.Decimal,
      value: value.body.discount,
    }),
    (this.remainingAmount = {
      key: "RemainingAmount",
      dataType: db.sql.Decimal,
      value: value.body.remainingAmount,
    }),
  ]);
}
module.exports = _mSaveSale;
