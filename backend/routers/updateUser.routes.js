const { Router } = require("express");
const { validateJWT } = require("../middlewares");
const { updateInfoUser } = require("../controllers/userUpdateController");
const route = Router();

route.put("/", [validateJWT], updateInfoUser);

module.exports = {
  updateUser: route,
};
