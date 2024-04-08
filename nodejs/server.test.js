const request = require("supertest");
const app = require("./app");

describe("Hello NodeJS suite", () => {
  it("tests / endpoints", async () => {
    const response = await request(app).get("/");
    expect(response.text).toContain("Hello World");
    expect(response.statusCode).toBe(200);
  });

  it("tests /date endpoints", async () => {
    const response = await request(app).get("/date");
    var utcDate = new Date()

    var day = utcDate.getDate()
    var month = utcDate.getMonth()+1
    var year = utcDate.getFullYear()

    expect(response.text).toContain(`${month}-${day}-${year}`);
    expect(response.statusCode).toBe(200);
  });
});
