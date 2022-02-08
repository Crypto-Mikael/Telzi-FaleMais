import { getRepository } from "typeorm";
import DDDs from "../entities/DDDs";

type DDDsRequest = {
  id_DDDs: number;
  description: string;
};

export default class DDDsModel {
  async executeCreate({ description }: { description: string }) {
    const repo = getRepository(DDDs);

    if (await repo.findOne({ description })) {
      return new Error("description already exists");
    }

    const newDDD = repo.create({ description });

    await repo.save(newDDD);
    return newDDD;
  }

  async executeFindAll(): Promise<DDDs[] | Error> {
    const repo = getRepository(DDDs);
    const AllDDDs = repo.find({ select: ["id_DDDs", "description"] });
    if (!AllDDDs) {
      return new Error("any DDD finded");
    }
    return AllDDDs;
  }

  async executeUpdateDDD({ id_DDDs, description }: DDDsRequest) {
    const repo = getRepository(DDDs);

    const DDD = await repo.findOne({ id_DDDs });

    if (!DDD) {
      return new Error("DDD not finded");
    }

    repo.update(id_DDDs, { description });

    return repo.save({ id_DDDs, description });
  }

  async executeDeleteDDD({ id_DDDs }: { id_DDDs: number }) {
    const repo = getRepository(DDDs);

    const DDD = await repo.findOne({ id_DDDs });

    if (!DDD) {
      return new Error("DDD not finded");
    }

    await repo.delete({ id_DDDs });

    return DDD
  }
}
