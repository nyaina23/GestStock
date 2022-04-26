const request = require("supertest");
const app = require("../app");

/* INTERDICTION DE MODIFIER CE FICHIER SANS AUTORISATION */

describe("GET /products", () => {
  test("returns status code 200", async () => {
    const response = await request(app)
      .get("/products")
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
  });

  test("returns json content", async () => {
    const response = await request(app)
      .get("/products")
      .set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("returns a list of products", async () => {
    const response = await request(app)
      .get("/products")
      .set("Accept", "application/json");
    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach((product) => {
      expect(product).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
      });
    });
  });
});
