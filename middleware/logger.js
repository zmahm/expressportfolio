// middleware/logger.js
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Continue to the next middleware or route handler
  };
  
  module.exports = logger;
  