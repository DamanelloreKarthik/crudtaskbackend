const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CrudModalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const crudModalSchema = mongoose.model("upcoming", CrudModalSchema);
module.exports = crudModalSchema;
