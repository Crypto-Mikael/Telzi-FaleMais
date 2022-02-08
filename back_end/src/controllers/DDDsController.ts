import { Request, Response } from "express";
import DDDsModel from "../models/DDDsModel";

export default class DDDsController {
  async create_DDDs(req: Request, res: Response) {
    const { description } = req.body;

    const model = new DDDsModel();

    const result = await model.executeCreate({ description });

    if (result instanceof Error) {
      const { message } = result;
      return res.status(400).json({ message });
    }

    return res.status(201).json(result);
  }

  async findAll_DDDs(_req: Request, res: Response) {
    const model = new DDDsModel();

    const result = await model.executeFindAll();

    if (result instanceof Error) {
      const { message } = result;
      return res.status(400).json({ message });
    }

    return res.status(200).json(result);
  }

  async update_DDD(req: Request, res: Response) {
    const { description } = req.body;
    const { id } = req.params;

    const id_DDDs = Number(id);

    const model = new DDDsModel();

    const result = await model.executeUpdateDDD({ description, id_DDDs });

    if (result instanceof Error) {
      const { message } = result;
      return res.status(400).json({ message });
    }

    return res.status(204).json(result);
  }

  async delete_DDD(req: Request, res: Response) {
    const { id } = req.params;

    const id_DDDs = Number(id);

    const model = new DDDsModel();

    const result = await model.executeDeleteDDD({ id_DDDs });

    if (result instanceof Error) {
      const { message } = result;
      return res.status(400).json({ message });
    }

    return res.status(204).json(result);
  }
}
