import { getRepository } from "typeorm";
import OriginDestiny from "../entities/OriginDestiny";

type OriginDestinyRequest = {
  id_origin_destiny: number,
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

  async executeUpdate({ id_origin_destiny, origin, destiny, value }) {
    const repo = getRepository(OriginDestiny);

    const IdExists = repo.findOne({ id_origin_destiny });

    if (!IdExists) {
      return new Error("id OriginDestiny not finded");
    }

    repo.update(id_origin_destiny, { origin, destiny, value });
    return repo.save({ id_origin_destiny, origin, destiny, value });
  }

  async executeDelete({ id_origin_destiny }) {
    const repo = getRepository(OriginDestiny);

    const deletedOriginDestiny = await repo.findOne({ id_origin_destiny });
    
    if (!deletedOriginDestiny) {
      return new Error("id OriginDestiny not finded");
    }

    repo.delete({ id_origin_destiny });

    return deletedOriginDestiny;
  };
}
