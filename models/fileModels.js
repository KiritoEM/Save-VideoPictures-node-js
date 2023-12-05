const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  file_path: {
    type: String,
    default: "",
    resuired: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  size: {
    type: Number,
    required: true,
    default: 0,
  },
  file_name: {
    type: String,
    default: "",
  },
});

//export fileModel
module.exports = new mongoose.model("file_upload", fileSchema);
