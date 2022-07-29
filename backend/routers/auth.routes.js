const { Router } = require("express");
const {
  createAccount,
  loginAccount,
  validateToken,
} = require("../controllers");

const route = Router();

route.post("/create", createAccount);
route.post("/login", loginAccount);
route.get("/validate", validateToken);

module.exports = {
  auth: route,
};
