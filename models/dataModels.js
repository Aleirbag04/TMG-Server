const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    contactNumber: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
