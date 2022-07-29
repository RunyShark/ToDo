const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const generateJWT = (user) => {
  console.log(`Soy user`, user);
  return jwt.sign(
    {
      uid: user.id,
      name: user.name,
    },
    JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

module.exports = {
  generateJWT,
};
