import server from "../server";
import request from "supertest";

import { createConnection } from "typeorm";
import { defaultAPI } from "./mocks/MocksDDDs";

beforeAll(async () => {
  await createConnection();
});

describe("GET / DDDs - Retrive all DDDs", () => {
  it("Should GET all DDDs", async () => {
    const result = await request(server).get("/DDDs");
    expect(result.text).toEqual(JSON.stringify(defaultAPI));
    expect(result.statusCode).toEqual(200);
  });
});

describe("POST / DDDs - Retrive all DDDs", () => {
  it("Should INSERT one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(defaultAPI));

    await request(server).post("/DDDs").send({ description: "019" });
  });
});
