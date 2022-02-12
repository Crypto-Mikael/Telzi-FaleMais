import server from "../server";
import request from "supertest";

import { createConnection, getConnection } from "typeorm";
import mock1 from "./mocks/MocksDDDs";

import mock2 from "./mocks/MocksOriginDestiny";

beforeAll(() => createConnection());

describe("GET / DDDs - Get all DDDs", () => {
  it("Should GET all DDDs", async () => {
    const response = await request(server).get("/DDDs");
    expect(response.text).toEqual(JSON.stringify(mock1.defaultAPI));
    expect(response.statusCode).toEqual(200);
  });
});

describe("POST / DDDs - Insert DDD", () => {
  it("Should INSERT one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(mock1.defaultAPI));
    expect(responseBefore.statusCode).toEqual(200);

    const updateResponse = await request(server)
      .post("/DDDs")
      .send({ description: "019" });
    expect(updateResponse.statusCode).toEqual(201);

    const responseAfter = await request(server).get("/DDDs");
    expect(responseAfter.statusCode).toEqual(200);
    expect(responseAfter.text).toEqual(JSON.stringify(mock1.addedAPI));
  });
});

describe("PUT / DDDs - Update DDD", () => {
  it("Should UPDATE one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(mock1.addedAPI));
    expect(responseBefore.statusCode).toEqual(200);

    const updateResponse = await request(server)
      .put(`/DDDs/5`)
      .send({ description: "020" });

    expect(updateResponse.statusCode).toEqual(200);

    const responseAfter = await request(server).get("/DDDs");
    expect(responseAfter.statusCode).toEqual(200);
    expect(responseAfter.text).toEqual(JSON.stringify(mock1.updatedAPI));
  });
});

describe("DELETE / DDDs - Delete DDD", () => {
  it("Should DELETE one DDD", async () => {
    const responseBefore = await request(server).get("/DDDs");
    expect(responseBefore.text).toEqual(JSON.stringify(mock1.updatedAPI));
    expect(responseBefore.statusCode).toEqual(200);

    const deletedResponse = await request(server).delete(
      `/DDDs/${mock1.updatedAPI[mock1.updatedAPI.length - 1].id_DDDs}`
    );

    expect(deletedResponse.statusCode).toEqual(200);

    const responseAfter = await request(server).get("/DDDs");
    expect(responseAfter.statusCode).toEqual(200);
    expect(responseAfter.text).toEqual(JSON.stringify(mock1.defaultAPI));
  });
});

describe("GET / OriginDestiny - Get all OriginDestiny", () => {
  it("Should GET all OriginDestiny", async () => {
    const response = await request(server).get("/OriginDestiny");
    expect(response.text).toEqual(JSON.stringify(mock2.defaultAPITest));
    expect(response.statusCode).toEqual(200);
  });
});

describe("POST / OriginDestiny - Insert OriginDestiny", () => {
  it("Should INSERT one OriginDestiny", async () => {
    const responseBefore = await request(server).get("/OriginDestiny");
    expect(responseBefore.text).toEqual(JSON.stringify(mock2.defaultAPITest));
    expect(responseBefore.statusCode).toEqual(200);

    const updateResponse = await request(server).post("/OriginDestiny").send({
      origin: 4,
      destiny: 2,
      value: 1.7,
    });
    expect(updateResponse.statusCode).toEqual(201);

    const responseAfter = await request(server).get("/OriginDestiny");
    expect(responseAfter.statusCode).toEqual(200);
    expect(responseAfter.text).toEqual(JSON.stringify(mock2.addedAPI));
  });
});

describe("PUT / OriginDestiny - Update OriginDestiny", () => {
  it("Should UPDATE one OriginDestiny", async () => {
    const responseBefore = await request(server).get("/OriginDestiny");
    expect(responseBefore.text).toEqual(JSON.stringify(mock2.addedAPI));
    expect(responseBefore.statusCode).toEqual(200);

    const updateResponse = await request(server)
      .put(
        `/OriginDestiny/${
          mock2.updatedAPI[mock2.updatedAPI.length - 1].id_origin_destiny
        }`
      )
      .send({
        origin: 3,
        destiny: 2,
        value: 1.9,
      });

    expect(updateResponse.statusCode).toEqual(200);

    const responseAfter = await request(server).get("/OriginDestiny");
    expect(responseAfter.statusCode).toEqual(200);
    expect(responseAfter.text).toEqual(JSON.stringify(mock2.updatedAPI));
  });
});

describe("DELETE / OriginDestiny - Delete OriginDestiny", () => {
  it("Should DELETE one OriginDestiny", async () => {
    const responseBefore = await request(server).get("/OriginDestiny");
    expect(responseBefore.text).toEqual(JSON.stringify(mock2.updatedAPI));
    expect(responseBefore.statusCode).toEqual(200);

    const deletedResponse = await request(server).delete(
      `/OriginDestiny/${
        mock2.updatedAPI[mock2.updatedAPI.length - 1].id_origin_destiny
      }`
    );

    expect(deletedResponse.statusCode).toEqual(200);

    const responseAfter = await request(server).get("/OriginDestiny");
    expect(responseAfter.statusCode).toEqual(200);  
  });
});