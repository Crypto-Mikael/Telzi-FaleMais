import { getRepository } from "typeorm";
import OriginDestiny from "../entities/OriginDestiny";

type OriginDestinyRequest = {
  origin: number;
  destiny: number;
  value: number;
};

export default class OriginDestinyModel {
  async executeCreate({ origin, destiny, value }) {
    const repo = getRepository(OriginDestiny);

    if (await repo.findOne({ where: { origin, destiny } })) {
      return new Error("OriginDestiny already exists");
    }
    const newOriginDestiny = repo.create({ origin, destiny, value });

    await repo.save(newOriginDestiny);

    return newOriginDestiny;
  }

  async executeFindAll(): Promise<OriginDestiny[] | Error> {
    const repo = getRepository(OriginDestiny);
    const AllOriginDestiny = repo.find({ relations: ["origin", "destiny"] });
    if (!AllOriginDestiny) {
      return new Error("any DDD finded");
    }
    return AllOriginDestiny;
  }
}
