const express = require("express");
const router = express.Router();

const {createTodo} = require("../Controllers/createTodo");
const {getTodo} = require("../Controllers/getTodo");
const {getTodoById} = require("../Controllers/getTodo");
const {updateTodo} = require("../Controllers/uodateTodo");
const {deleteTodo} = require("../Controllers/deleteTodo");


router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;