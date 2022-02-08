import server from "../server";
import request from "supertest";

import { createConnection } from "typeorm";
import { defaultAPI, addedAPI, updatedAPI } from "./mocks/MocksDDDs";

beforeAll(() => createConnection());

describe("GET / DDDs - Get all DDDs", () => {
  it("Should GET all DDDs", async () => {
    const result = await request(server).get("/DDDs");
    expect(result.text).toEqual(JSON.stringify(defaultAPI));
    expect(result.statusCode).toEqual(200);
  });
});

describe("POST / DDDs - Insert DDD", () => {
  it("Should INSERT one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(defaultAPI));

    await request(server).post("/DDDs").send({ description: "019" });
    const responseAfter = await request(server).get("/DDDs");
    expect(responseAfter.text).toEqual(JSON.stringify(addedAPI));
  });
});

describe("PUT / DDDs - Update DDD", () => {
  it("Should UPDATE one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(addedAPI));

    await request(server)
      .put(`/DDDs/${updatedAPI[updatedAPI.length - 1].id_DDDs}`)
      .send({ description: "020" });
    const responseAfter = await request(server).get("/DDDs");
    expect(responseAfter.text).toEqual(JSON.stringify(updatedAPI));
  });
});

describe("DELETE / DDDs - Delete DDD", () => {
  it("Should DELETE one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(updatedAPI));

    await request(server).delete(
      `/DDDs/${updatedAPI[updatedAPI.length - 1].id_DDDs}`
    );
    const responseAfter = await request(server).get("/DDDs");
    expect(responseAfter.text).toEqual(JSON.stringify(defaultAPI));
  });
});
