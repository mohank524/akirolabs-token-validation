const express = require('express');
const LuhnValidator = require('../LuhnValidator');
const { generateToken, startTokenLoop, stopTokenLoop, getGeneratedTokens } = require('../utils/tokenUtils');

const router = express.Router();

// Endpoint to generate a single token
router.post('/generateToken', (req, res) => {
  const token = generateToken();
  res.json({ token });
});

// Validate the token using Luhn algorithm
router.post('/validateToken', (req, res) => {
  const { token } = req.body;
  const isValid = LuhnValidator.validate(token);
  res.json({ isValid });
});

// Start the infinite token creation loop
router.post('/startTokenLoop', (req, res) => {
  startTokenLoop();
  res.json({ message: "Token loop is started" });
});

// Stop the infinite token creation loop
router.post('/stopTokenLoop', (req, res) => {
  const { totalTokens, validTokens } = stopTokenLoop();
  res.json({ message: 'Token loop stopped.', totalTokens, validTokens });
});

// Get all generated tokens
router.get('/tokens', (req, res) => {
  const tokens = getGeneratedTokens();
  res.json({ tokens });
});

module.exports = router;
