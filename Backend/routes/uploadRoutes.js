const express = require('express');
const multer = require('multer');
const WebGLFile = require('../models/WebGLFile');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.post('/upload', upload.single('webglFile'), async (req, res) => {
  try {
    const webglFile = new WebGLFile({ filename: req.file.filename });
    await webglFile.save();
    res.status(201).json({ message: 'File uploaded successfully!', file: webglFile });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading file.', error: err.message });
  }
});

module.exports = router;
