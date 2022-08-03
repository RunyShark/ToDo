const { auth } = require("./auth.routes");
const { todo } = require("./todo.routes");
const { updateUser } = require("./updateUser.routes");
module.exports = {
  auth,
  todo,
  updateUser,
};
