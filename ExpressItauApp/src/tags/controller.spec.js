//	IMPORTS//////
const mocha = require("mocha");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const sinonMockExpress = require("sinon-express-mock");
const DB = require("../db");
const TagsService = require("./service");
const TagsController = require("./controller");
//	INITIALIZE////////////////
chai.should();
chai.use(sinonChai);
const expect = chai.expect;
const mockReq = sinonMockExpress.mockReq;
const mockRes = sinonMockExpress.mockRes;
//	TEST RUNNER///////////////
describe("Controller Tags", () => {

	const tagsService = new TagsService(DB);
	const controller = new TagsController(tagsService);

	describe("~> list()", () => {

		it("Expect that status equal `200`", async () => {
			const req = mockReq();
			const res = mockRes();
			let result = await controller.list(req, res);

			expect(result.status).to.be.calledWith(200);
		});
	});
});
