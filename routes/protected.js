const express = require('express');
const auth = require('../middleware/auth'); // Import JWT middleware

const router = express.Router();

// 🔹 Protected Route Example
router.get('/dashboard', auth, (req, res) => {
  res.json({ msg: `Welcome to the dashboard, user ID: ${req.user.id}` });
});

module.exports = router;
