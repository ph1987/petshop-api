import OwnerRepository from "../repositories/owner.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createOwner(owner) {
  return await OwnerRepository.createOwner(owner);
}

async function getOwners() {
  return await OwnerRepository.getOwners();
}

async function getOwner(id) {
  const owner = await OwnerRepository.getOwner(id);
  if (!owner) {
    throw Error ("Invalid owner id");
  }
  return owner;
}

async function deleteOwner(id) {
  const checkOwnerHasAnimal = await AnimalRepository.getAnimalsByOwner(id);
  if (checkOwnerHasAnimal.length) {
    throw Error("Can't delete an owner having animals related");
  }
  const findOwner = await this.getOwner(id);
  if (findOwner) {
    return await OwnerRepository.deleteOwner(id);
  }
}

async function updateOwner(owner, id) {
  const findOwner = await this.getOwner(id);
  if (findOwner) {
    return await OwnerRepository.updateOwner(owner, id);
  }
}

export default {
  createOwner,
  getOwners,
  getOwner,
  deleteOwner,
  updateOwner
}