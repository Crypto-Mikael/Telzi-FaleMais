import { getRepository } from "typeorm";
import OriginDestiny from "../entities/OriginDestiny";

type OriginDestinyRequest = {
  origin: number;
  destiny: number;
  value: number;
};

export default class OriginDestinyModel {
  async executeCreate({ origin, destiny, value }: OriginDestinyRequest) {
    const repo = getRepository(OriginDestiny);

    if (await repo.find({ where: { origin, destiny, value } })) {
      return new Error("OriginDestiny already exists");
    }

    const newOriginDestiny = repo.create({ origin, destiny, value });

    await repo.save(newOriginDestiny);

    return newOriginDestiny;
  }
}
