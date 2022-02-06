import { Request, response, Response } from 'express'
import { CreateDDDsModel } from "../models/DDDsModel";

export default class CreateDDDsController {
  async handle(req: Request, res: Response) {
    const { description } = req.body;
    
    const model = new CreateDDDsModel();

    const result = await model.execute({ description });

    if (result instanceof Error) {
      const { message } = result
      return res.status(400).json({ message });
    }

    return res.status(201).json(result)
  }
}