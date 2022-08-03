const { Router } = require("express");
const { check } = require("express-validator");
const {
  chaguePassword,
  createAccount,
  loginAccount,
  newPassword,
  validateChanguePasswordToken,
  validateToken,
} = require("../controllers");
const { validateErros, validateJWT } = require("../middlewares");
const { emailExists, emailNoExists } = require("../helpers/validationDB");

const route = Router();

route.post(
  "/register",
  [
    check("name", "El campo nombre es obligatorio").not().isEmpty(),
    check("name", "Solo se aceptan letras o numeros en string").isString(),
    check(
      "name",
      "El nombre debe de tener minimo 3 caracteres y un maximo de 20 caracteres"
    ).isLength({
      min: 3,
      max: 20,
    }),

    check("email", "El campo email es obligatoior").not().isEmpty(),
    check("email", "Debe de ser un email valido").isEmail(),
    check("email").custom(emailExists),

    check("password", "La contraseña es un campo obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña debe de tener un minimo de 6 caracteres y un maximo de 20 caracteres"
    ).isLength({ min: 6, max: 20 }),

    validateErros,
  ],
  createAccount
);
route.post(
  "/login",
  [
    check("email", "El campo email es obligatoior").not().isEmpty(),
    check("email", "Debe de ser un email valido").isEmail(),
    check("email").custom(emailNoExists),

    check("password", "La contraseña es un campo obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña debe de tener un minimo de 6 caracteres y un maximo de 20 caracteres"
    ).isLength({ min: 6, max: 20 }),

    validateErros,
  ],
  loginAccount
);

route.get("/validate", [validateJWT, validateErros], validateToken);

route.post(
  "/changuePassword",
  [
    check("email", "El campo email es obligatoior").not().isEmpty(),
    check("email", "Debe de ser un email valido").isEmail(),
    check("email").custom(emailNoExists),
    validateErros,
  ],
  chaguePassword
);

route.get(
  "/changuePasswordCheck/:changePassword",
  validateChanguePasswordToken
);

route.post(
  "/changuePasswordCheck/:toke",
  [
    check("password", "La contraseña es un campo obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña debe de tener un minimo de 6 caracteres y un maximo de 20 caracteres"
    ).isLength({ min: 6, max: 20 }),

    validateErros,
  ],
  newPassword
);
module.exports = {
  auth: route,
};
