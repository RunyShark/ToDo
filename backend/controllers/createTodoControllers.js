const { request, response } = require("express");
const { model } = require("mongoose");

const createTodo = (req = request, res = response) => {
  res.json({ msg: "Todo" });
};

const deleteTodo = (req = request, res = response) => {
  res.json({ msg: "deleteTodo" });
};

const updateTodo = (req = request, res = response) => {
  res.json({ msg: "updateTodo" });
};

const getTodos = (req = request, res = response) => {
  res.json({ msg: "getTodos" });
};

module.exports = {
  createTodo,
  deleteTodo,
  updateTodo,
  getTodos,
};
