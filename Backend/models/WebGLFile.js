const mongoose = require('mongoose');

const webGLFileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  filePath: { type: String, required: true }, // Store path to unzipped folder
  uploadDate: { type: Date, default: Date.now },
});

const WebGLFile = mongoose.model('WebGLFile', webGLFileSchema);
module.exports = WebGLFile;
