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
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  state: {
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
