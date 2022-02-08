import server from "../server";
import request from "supertest";

import { createConnection } from "typeorm";
import { defaultAPI, addedAPI, updatedAPI } from "./mocks/MocksDDDs";

beforeAll(() => createConnection());

describe("GET / DDDs - Get all DDDs", () => {
  it("Should GET all DDDs", async () => {
    const response = await request(server).get("/DDDs");
    expect(response.text).toEqual(JSON.stringify(defaultAPI));
    expect(response.statusCode).toEqual(200);
  });
});

describe("POST / DDDs - Insert DDD", () => {
  it("Should INSERT one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(defaultAPI));
    expect(responseBefore.statusCode).toEqual(200);

    const updateResponse = await request(server)
      .post("/DDDs")
      .send({ description: "019" });
    expect(updateResponse.statusCode).toEqual(201);

    const responseAfter = await request(server).get("/DDDs");
    expect(responseAfter.statusCode).toEqual(200);
    expect(responseAfter.text).toEqual(JSON.stringify(addedAPI));
  });
});

describe("PUT / DDDs - Update DDD", () => {
  it("Should UPDATE one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(addedAPI));
    expect(responseBefore.statusCode).toEqual(200);

    const updateResponse = await request(server)
      .put(`/DDDs/${updatedAPI[updatedAPI.length - 1].id_DDDs}`)
      .send({ description: "020" });

    expect(updateResponse.statusCode).toEqual(204);

    const responseAfter = await request(server).get("/DDDs");
    expect(responseAfter.statusCode).toEqual(200);
    expect(responseAfter.text).toEqual(JSON.stringify(updatedAPI));
  });
});

describe("DELETE / DDDs - Delete DDD", () => {
  it("Should DELETE one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(updatedAPI));
    expect(responseBefore.statusCode).toEqual(200);

    const deletedResponse = await request(server).delete(
      `/DDDs/${updatedAPI[updatedAPI.length - 1].id_DDDs}`
    );

    expect(deletedResponse.statusCode).toEqual(204);

    const responseAfter = await request(server).get("/DDDs");
    expect(responseAfter.statusCode).toEqual(200);
    expect(responseAfter.text).toEqual(JSON.stringify(defaultAPI));
  });
});
