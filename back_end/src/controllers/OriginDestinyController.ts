import { Request, Response } from "express";
import OriginDestinyService from "../service/OriginDestinyService";

export default class OriginDestinyController {
  async createOriginDestiny(req: Request, res: Response) {
    const { origin, destiny, value } = req.body;
    
    const service = new OriginDestinyService();

    const newOriginDestiny = await service.serviceCreate({ origin, destiny, value });

    if (newOriginDestiny instanceof Error) {
      const { message } = newOriginDestiny;
      return res.status(400).json({ message });
    }

    return res.status(201).json(newOriginDestiny);
  }

  async findAllOriginDestiny(_req: Request, res: Response) {
    const service = new OriginDestinyService();

    const allOriginDestiny = await service.serviceFindAll();

    return res.status(200).json(allOriginDestiny);
  }

  async updateOriginDestiny(req: Request, res: Response) {
    const { id } = req.params;
    const { origin, destiny, value  } = req.body;
    const service = new OriginDestinyService();
  
    const updatedOriginDestiny = await service.serviceUpdate({
      id,
      origin,
      destiny,
      value,
    });

    if (updatedOriginDestiny instanceof Error) {
      const { message } = updatedOriginDestiny;
      return res.status(400).json({ message });
    }

    return res.status(204).json(updatedOriginDestiny);
  }

  async deleteOriginDestiny(req: Request, res: Response) {
    const { id } = req.params;

    const service = new OriginDestinyService();

    const deletedOriginDestiny = await service.serviceDelete({ id });

    return res.status(204).json(deletedOriginDestiny);
  }
}