const mongoose = require('mongoose');

const webglFileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WebGLFile', webglFileSchema);
