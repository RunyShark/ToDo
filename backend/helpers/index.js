const bycripPassword = require("./bycripPassword");
const { generateJWT } = require("./generateJWT");
const emails = require("./SendEmail");
const { changuePassword } = require("./changuePassword");
module.exports = {
  ...bycripPassword,
  ...emails,
  generateJWT,

  changuePassword,
};
