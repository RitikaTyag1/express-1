const { getService, postService } = require("../services/todos.services");

const getHandler = async (req, res) => {
    try {
        const todos = await getService();
        if (!todos) res.status(200).send('No todos for today');
        else res.status(200).json(todos);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const postHandler = async (req, res) => {
    const putTodo = req.body;
    try {
        await postService(putTodo);
        getHandler();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    getHandler,
    postHandler
}