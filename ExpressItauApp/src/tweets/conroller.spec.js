//	IMPORTS//////
const mocha = require("mocha");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const sinonMockExpress = require("sinon-express-mock");
const DB = require("../db");
const logger = require("../logger");
const TweetsService = require("./service");
const TweetsControler = require("./controller");
//	INITIALIZE////////////////
chai.should();
chai.use(sinonChai);
const expect = chai.expect;
const mockReq = sinonMockExpress.mockReq;
const mockRes = sinonMockExpress.mockRes;
//	TEST RUNNER///////////////
describe("Controller Tweets", () => {

	const tweetsService = new TweetsService(DB);
	const controller = new TweetsControler(tweetsService, logger);

	describe("~> list()", () => {

		it("Expect that status equal `200`", async () => {
			const req = mockReq();
			const res = mockRes();
			let result = await controller.list(req, res);

			expect(result.status).to.be.calledWith(200);
		});
	});

	describe("~> import()", () => {

		it("Expect that status equal `200`", async () => {

			//	eslint-disable-next-lines
			const req = mockReq({
				body: {
					data: [
						{
							user: {
								id: 1731304340,
								name: "Martel Innovate",
								screen_name: "Martel_Innovate",
								location: "Switzerland",
								followers_count: 1085,
								lang: "en",
								description: "Promoting R&amp;D and Innovation on Information and Communication Technologies.",
								profile_image_url: "http://pbs.twimg.com/profile_images/964511886229360641/mF3UiU7X_normal.jpg",
							},
							tweet: {
								id: 1119134038042628100,
								text: "Martel will present its #SmartCity platform @OrchestraCityEU at IoT Week 2019 @IoTWeekAarhus Let&apos;s meet there!&hellip; https://t.co/1volqU2wix",
								created_at: "2019-04-19 04:02:01",
							},
						},
					],
					tag: {
						id: 10,
						tag: "#openapis",
					},
				},
			});

			const res = mockRes();
			let result = await controller.import(req, res);

			expect(result.status).to.be.calledWith(200);
		});
	});

});
