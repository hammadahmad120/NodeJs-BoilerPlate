const jwt = require("jsonwebtoken");
//single generic method to generate token with payload to keep it consistent in overall API
module.exports = {
   generateAuthToken: (user) => {
    const token = jwt.sign(
      { userId: user.userId, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return token;
  }
};