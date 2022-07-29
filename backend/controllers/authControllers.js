const { request, response } = require("express");

const createAccount = async (req = request, res = response) => {
  try {
    res.json({ msg: "Crear cuenta" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const loginAccount = async (req = request, res = response) => {
  try {
    res.json({ msg: "Login cuenta" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const validateToken = async (req = request, res = response) => {
  try {
    res.json({ msg: "validar secion" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

module.exports = {
  createAccount,
  loginAccount,
  validateToken,
};
