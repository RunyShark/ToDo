const bycripPassword = require("./bycripPassword");
const { generateJWT } = require("./generateJWT");

module.exports = {
  ...bycripPassword,
  generateJWT,
};
