const express = require("express");
const todoRouter = express.Router();

const { getHandler, postHandler } = require("../handlers/todos.handler");

todoRouter.get('/', getHandler);
todoRouter.post('/', postHandler);

module.exports = {
    todoRouter
}