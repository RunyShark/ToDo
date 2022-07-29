const { request, response } = require("express");
const { hassPassword, generateJWT } = require("../helpers");
const Users = require("../models/User");

const createAccount = async (req = request, res = response) => {
  try {
    const { password } = req.body;

    const passOp = await hassPassword(password);

    const user = await Users(req.body);

    user.password = passOp;
    await user.save();

    res.json({
      Error: false,
      msg: "Registro completado",
      user: {
        uid: user.id,
        name: user.name,
        token: generateJWT(user),
      },
    });
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
