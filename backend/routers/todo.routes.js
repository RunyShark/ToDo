const { Router } = require("express");
const { check } = require("express-validator");

const {
  getTodos,
  deleteTodo,
  createTodo,
  updateTodo,
} = require("../controllers");
const { validateErros, validateJWT } = require("../middlewares");
const { isDate, existeTodo } = require("../helpers/validationDB");

const route = Router();

route.get("/getTodos", [validateJWT], getTodos);

route.put(
  "/updateTodo/:id",
  [
    validateJWT,
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(existeTodo),

    check("title", "Debe de ser un texto, no numeros").isString(),
    check(
      "title",
      "El titulo debe de tener un minimo de 3 caracteresy un maximo de 20"
    ).isLength({ min: 3, max: 20 }),

    validateErros,
  ],
  updateTodo
);
route.delete(
  "/deleteTodo/:id",
  [
    validateJWT,
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(existeTodo),
    validateErros,
  ],
  deleteTodo
);
route.post(
  "/createTodo",
  [
    validateJWT,
    check("title", "El titulo es un campo obligartorio").not().isEmpty(),
    check("title", "Debe de ser un texto, no numeros").isString(),
    check(
      "title",
      "El titulo debe de tener un minimo de 3 caracteresy un maximo de 20"
    ).isLength({ min: 3, max: 20 }),

    check("text", "La descripcion es un campo obligatorio").not().isEmpty(),
    check(
      "text",
      "La descripcion debe de tener un minimo de 3 caracteresy un maximo de 20"
    ).isLength({ min: 3, max: 200 }),

    check("dateEnd", "La fecha de finilizacion de envento es obligatorio")
      .not()
      .isEmpty(),
    check("dateEnd").custom(isDate),
    validateErros,
  ],
  createTodo
);

module.exports = {
  todo: route,
};
