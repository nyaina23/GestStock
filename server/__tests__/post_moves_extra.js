const request = require("supertest");
const app = require("../app");

/* INTERDICTION DE MODIFIER CE FICHIER SANS AUTORISATION */

describe("POST /moves", () => {
  afterEach(async () => {
    await request(app).post("/reset");
  });

  test("returns status code 400 with unknown productId", async () => {
    const response = await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 99999, quantity: 1, direction: "in" });
    expect(response.statusCode).toBe(400);
  });

  test("returns status code 400 with out movement and quantity too large", async () => {
    const response = await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 1, quantity: 10, direction: "out" });
    expect(response.statusCode).toBe(400);
  });
});
