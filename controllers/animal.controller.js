import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    const animal = req.body;
    if (
      !animal.name ||
      !animal.type ||
      !animal.owner_id
    ) {
      throw new Error("fields required: name, type, owner_id");
    }
    res.send(await AnimalService.createAnimal(animal));
    logger.info(`POST /animals - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function getAnimals(req, res, next) {
  try {
    res.send(await AnimalService.getAnimals(req.query.owner));
    logger.info(`GET /animals`);
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    const animal = res.send(await AnimalService.getAnimal(req.params.id));
    logger.info(`GET /animals - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    const animal = await AnimalService.deleteAnimal(req.params.id);
    res.end();
    logger.info(`DELETE /animals - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    const animal = req.body;
    if (
      !req.params.id ||
      !animal.name ||
      !animal.type ||
      !animal.owner_id
    ) {
      throw new Error("fields required: name, type, owner_id");
    }
    const updatedAnimal = res.send(await AnimalService.updateAnimal(animal, req.params.id));
    logger.info(`PUT /animal - ${JSON.stringify(updatedAnimal)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal
}
