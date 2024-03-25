import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.createAnimal(animal);
}

async function getAnimals(owner) {
  if (owner) {
    return await AnimalRepository.getAnimalsByOwner(owner);
  }
  return await AnimalRepository.getAnimals();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
  return await AnimalRepository.deleteAnimal(id);
}

async function updateAnimal(animal, id) {
  return await AnimalRepository.updateAnimal(animal, id);
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal
}