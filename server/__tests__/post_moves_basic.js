const request = require("supertest");
const app = require("../app");

/* INTERDICTION DE MODIFIER CE FICHIER SANS AUTORISATION */

describe("POST /moves", () => {
  afterEach(async () => {
    await request(app).post("/reset");
  });

  test("returns status code 201 with valid data", async () => {
    const response = await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 1, quantity: 1, direction: "in" });
    expect(response.statusCode).toBe(201);
  });

  test("returns status code 400 with missing productId", async () => {
    const response = await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ quantity: 1, direction: "in" });
    expect(response.statusCode).toBe(400);
  });

  test("returns status code 400 with alphanumeric productId", async () => {
    const response = await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: "abc123", quantity: 1, direction: "in" });
    expect(response.statusCode).toBe(400);
  });

  test("returns status code 400 with missing quantity", async () => {
    const response = await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 1, direction: "in" });
    expect(response.statusCode).toBe(400);
  });

  test("returns status code 400 with alphanumeric quantity", async () => {
    const response = await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 1, quantity: "abc123", direction: "in" });
    expect(response.statusCode).toBe(400);
  });

  test("returns status code 400 with missing direction", async () => {
    const response = await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ quantity: 1, productId: 1 });
    expect(response.statusCode).toBe(400);
  });

  test("returns status code 400 with invalid direction", async () => {
    const response = await request(app)
      .post("/moves")
      .set("Content-Type", "application/json")
      .send({ productId: 1, quantity: 1, direction: "other" });
    expect(response.statusCode).toBe(400);
  });
});
