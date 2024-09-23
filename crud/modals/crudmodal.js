const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CrudModalSchema = new Schema({
  amount: {
    type: String,
    require: true,
  },
  startDate: {
    type: String,
    require: true,
  },
  endDate: {
    type: String,
    require: true,
  },
});

const crudModalSchema = mongoose.model("upcomig", CrudModalSchema);
module.exports = crudModalSchema;
