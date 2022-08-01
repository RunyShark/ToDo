const { Schema, model } = require("mongoose");

const TodoShema = Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  dateStart: {
    type: Date,
    default: new Date().getTime(),
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  important: {
    type: Boolean,
    default: false,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
});

module.exports = model("Todos", TodoShema);
