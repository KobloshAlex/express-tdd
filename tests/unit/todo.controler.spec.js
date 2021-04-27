const todoController = require("../../controller/todo.controller");
const TodoModel = require("../../model/todo.model");
const httpMocks = require("node-mocks-http");
const mockData = require("../mock-data/new-todo.json");

TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = null;
});

describe("TodoController.createTodo", () => {
	beforeEach(() => {
		req.body = mockData;
	});
	it("should have a createTodo function", () => {
		expect(typeof todoController.createTodo).toBe("function");
	});
	it("should call TodoModel.create", () => {
		todoController.createTodo(req, res, next);
		expect(TodoModel.create).toBeCalledWith(mockData);
	});
	it("should return 201 status code", () => {
		todoController.createTodo(req, res, next);
		expect(res.statusCode).toBe(201);
		expect(res._isEndCalled()).toBeTruthy();
	});

	it("should return json body in response", () => {
		TodoModel.create.mockReturnValue(mockData);
		todoController.createTodo(req, res, next);
		expect(res._getJSONData()).toEqual(mockData);
	});
});
