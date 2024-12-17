const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ email, username, password: hashedPassword });
    await user.save();
    res.status(200).json({ message: 'Signup successful.', user: { email: user.email, username: user.username } });

  } catch (err) {
    res.status(500).json({ message: 'Error signing up user.', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({ message: 'Login successful.', user: { email: user.email, username: user.username } });

  } catch (err) {
    res.status(500).json({ message: 'Error logging in.', error: err.message });
  }
});

module.exports = router;