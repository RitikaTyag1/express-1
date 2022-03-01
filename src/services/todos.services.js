const express = require("express");
const fs = require("fs");
const filePath = "../resources/todos.txt";
const { promisfyReadFile, promisfyWriteFile } = require('../utils/todos.utils');

const getService = async () => {
    const todos = await promisfyReadFile(filePath);
    return todos;
}

const postService = async (addTodo) => {
    await promisfyWriteFile(filePath, addTodo);
    return;
}

module.exports = {
    getService,
    postService
}