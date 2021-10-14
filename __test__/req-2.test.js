const request = require("supertest");
const app = require("../index");

describe("Get route", () => {
  it("Request should return 'This is a second request.'", async () => {
    const res = await request(app).get("/second");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("This is a second request.");

  });
});

afterAll(async () => {
  await app.close();
});