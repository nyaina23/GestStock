const request = require("supertest");
const app = require("../app");

/* INTERDICTION DE MODIFIER CE FICHIER SANS AUTORISATION */

describe("GET /inventory", () => {
  afterEach(async () => {
    await request(app).post("/reset");
  });

  test("returns status code 200", async () => {
    const response = await request(app)
      .get("/inventory")
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
  });

  test("returns json content", async () => {
    const response = await request(app)
      .get("/inventory")
      .set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("returns a list of inventory lines", async () => {
    await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 1, quantity: 1, direction: "in" });
    await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 2, quantity: 3, direction: "in" });
    const response = await request(app)
      .get("/inventory")
      .set("Accept", "application/json");
    expect(response.body).toHaveLength(2);
    expect.arrayContaining([
      expect.objectContaining({
        productId: 1,
        quantity: 1,
      }),
      expect.objectContaining({
        productId: 2,
        quantity: 3,
      }),
    ]);
  });
});
