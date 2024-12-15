const express = require('express');
const multer = require('multer');
const admZip = require('adm-zip');
const path = require('path');
const fs = require('fs');
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

// Upload route
router.post('/upload', upload.single('webglFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const uploadedZipPath = path.join(__dirname, '../uploads', req.file.filename);
    const extractDir = path.join(__dirname, '../uploads', req.file.filename.replace('.zip', ''));

    if (!fs.existsSync(extractDir)) {
      fs.mkdirSync(extractDir);
    }

    const zip = new admZip(uploadedZipPath);
    zip.extractAllTo(extractDir, true);

    fs.unlinkSync(uploadedZipPath);

    const webglFile = new WebGLFile({
      filename: req.file.filename.replace('.zip', ''),
      filePath: extractDir,
    });

    await webglFile.save();

    res.status(201).json({
      message: 'File uploaded and extracted successfully!',
      file: webglFile,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error uploading or extracting file.', error: err.message });
  }
});

// Get uploaded files
router.get('/files', async (req, res) => {
  try {
    const files = await WebGLFile.find({}, 'filename');
    res.status(200).json({ files: files.map(file => file.filename) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching files.', error: err.message });
  }
});

module.exports = router;
