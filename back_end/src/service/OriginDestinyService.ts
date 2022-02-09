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
  }

  async serviceFindAll() {
    const model = new OriginDestinyModel();

    const AllOriginDestiny = await model.executeFindAll();

    return AllOriginDestiny;
  }

  async serviceUpdate({ id, origin, destiny, value }) {
    const model = new OriginDestinyModel();

    const serializedData = {
      id_origin_destiny: Number(id),
      origin: Number(origin),
      destiny: Number(destiny),
      value: Number(value),
    };

    const updatedOriginDestiny = await model.executeUpdate(serializedData);

    return updatedOriginDestiny;
  }
}