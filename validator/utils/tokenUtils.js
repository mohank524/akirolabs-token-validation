const LuhnValidator = require('../LuhnValidator');

// Available digits for token generation
const availableDigits = new Set([2, 4, 7, 9, 0]);
const generatedTokens = [];

// Helper function to generate a random token
const generateToken = () => {
  const tokenDigits = Array.from({ length: 16 }, () => {
    const availableDigitsArray = Array.from(availableDigits);
    return availableDigitsArray[Math.floor(Math.random() * availableDigitsArray.length)];
  });
  return tokenDigits.join('').replace(/(.{4})/g, '$1-').slice(0, -1);
};

// Infinite token creation loop
let tokenLoopInterval;
let totalTokens = 0;
let validTokens = 0;

const startTokenLoop = () => {
  if (!tokenLoopInterval) {
    tokenLoopInterval = setInterval(() => {
      const token = generateToken();
      totalTokens++;
      const isValid = LuhnValidator.validate(token);
      if (isValid) {
        generatedTokens.push(token);
        validTokens++;
      }
    }, 1000); // Change the interval as needed
  }
};

const stopTokenLoop = () => {
  if (tokenLoopInterval) {
    clearInterval(tokenLoopInterval);
    tokenLoopInterval = undefined;
  }
  return { totalTokens, validTokens };
};

const getGeneratedTokens = () => {
  return generatedTokens;
};

module.exports = {
  generateToken,
  startTokenLoop,
  stopTokenLoop,
  getGeneratedTokens,
};
