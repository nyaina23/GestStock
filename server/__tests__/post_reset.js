const request = require("supertest");
const app = require("../app");

/* INTERDICTION DE MODIFIER CE FICHIER SANS AUTORISATION */

describe("POST /reset", () => {
  test("returns status code 204", async () => {
    const response = await request(app).post("/reset");
    expect(response.statusCode).toBe(204);
  });
});
