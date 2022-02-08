import OriginDestinyModel from "../models/OriginDestinyModel";

export default class OriginDestinyService {
  async serviceCreate({ origin, destiny, value }) {
    const model = new OriginDestinyModel();

    const serializedData = {
      origin: Number(origin),
      destiny: Number(destiny),
      value: Number(value),
    };

    const newOriginDestiny = await model.executeCreate(serializedData);

    return newOriginDestiny;
  };
}