import { getRepository } from "typeorm";
import DDDs from "../entities/DDDs";

type DDDsRequest = {
  description: string;
}


export class CreateDDDsModel {
  async execute({ description }: DDDsRequest): Promise<DDDs | Error> {
    const repo = getRepository(DDDs);

    if (await repo.findOne({ description })) {
      return new Error("description already exists");
    }

    const DDD = repo.create({ description });

    await repo.save(DDD);
    return DDD;
  }
}