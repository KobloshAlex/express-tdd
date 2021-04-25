const todoController = require("../../controller/todo.controller");

describe("TodoController.createTodo", () => {
	it("should have a createTodo function", () => {
		expect(typeof todoController.createTodo).toBe("function");
	});
});
