const LuhnValidator = {
    validate: (number) => {
      const digits = number.replace(/-/g, '').split('').map(Number);
      let sum = 0;
      let alternate = false;
      for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        if (alternate) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }
        sum += digit;
        alternate = !alternate;
      }
      return sum % 10 === 0;
    },
  };
  
  module.exports = LuhnValidator;
  