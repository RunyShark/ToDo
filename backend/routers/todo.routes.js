const { Router } = require("express");
const {
  getTodos,
  deleteTodo,
  createTodo,
  updateTodo,
} = require("../controllers");
const route = Router();

route.get("/getTodos", getTodos);
route.put("/updateTodo", updateTodo);
route.delete("/deleteTodo", deleteTodo);
route.post("/createTodo", createTodo);

module.exports = {
  todo: route,
};
