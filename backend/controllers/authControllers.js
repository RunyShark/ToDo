const { request, response } = require("express");

const createAccount = (req = request, res = response) => {
  res.json({ msg: "Crear cuenta" });
};

const loginAccount = (req = request, res = response) => {
  res.json({ msg: "Login cuenta" });
};

const validateToken = (req = request, res = response) => {
  res.json({ msg: "validar secion" });
};

module.exports = {
  createAccount,
  loginAccount,
  validateToken,
};
