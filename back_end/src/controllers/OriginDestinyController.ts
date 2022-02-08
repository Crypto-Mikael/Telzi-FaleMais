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
}