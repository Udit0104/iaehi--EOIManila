const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  titleHindi: { type: String },
  subdepartments: [String]
});

module.exports = mongoose.model("Department", DepartmentSchema);
