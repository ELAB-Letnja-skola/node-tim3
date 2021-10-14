const request = require("supertest");
const app = require("../index");

describe("Get route", () => {
  it("Request should return 'This is a first request.'", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("This is a first request.");
  })
});

afterAll(async () => {
  await app.close();
});