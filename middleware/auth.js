const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // 🔹 Get token from the request header
  const token = req.header('x-auth-token');

  // 🔹 Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // 🔹 Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Attach user data to request object
    next(); // Move to the next middleware/route
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
