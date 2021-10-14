const request = require("supertest");
const app = require("../index");

describe("Get route", () => {
  it("Request should return 'This is a first request.'", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("This is a first request.");
  });
  it("Request should return 'This is a second request.'", async () => {
    const res = await request(app).get("/second");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("This is a second request.");

  });
  it("Request should return 'This is a third request.'", async () => {
    const res = await request(app).get("/third");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("This is a third request.");
  });
});

afterAll(async () => {
  await app.close();
});