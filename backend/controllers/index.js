const authController = require("./authControllers");
const createController = require("./createTodoControllers");
module.exports = {
  ...authController,
  ...createController,
};
