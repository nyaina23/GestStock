const request = require("supertest");
const app = require("../app");

/* INTERDICTION DE MODIFIER CE FICHIER SANS AUTORISATION */

describe("GET /moves", () => {
  afterEach(async () => {
    await request(app).post("/reset");
  });

  test("returns status code 200", async () => {
    const response = await request(app)
      .get("/moves")
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
  });

  test("returns json content", async () => {
    const response = await request(app)
      .get("/moves")
      .set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("returns a list of moves", async () => {
    await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 1, quantity: 1, direction: "in" });
    await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 2, quantity: 3, direction: "in" });
    await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 2, quantity: 1, direction: "out" });

    const response = await request(app)
      .get("/moves")
      .set("Accept", "application/json");

    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach((move) => {
      expect(move).toMatchObject({
        recorded: expect.any(String),
        productId: expect.any(Number),
        quantity: expect.any(Number),
        direction: expect.stringMatching(/in|out/),
      });
    });
  });
});
