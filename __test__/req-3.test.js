const request = require("supertest");
const app = require("../index");

describe("Get route", () => {
  it("Request should return 'This is a third request.'", async () => {
    const res = await request(app).get("/third");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("This is a third request.");
  });
});

afterAll(async () => {
  await app.close();
});