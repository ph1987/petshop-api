import OwnerService from "../services/owner.service.js";

async function createOwner(req, res, next) {
  try {
    const owner = req.body;
    if (
      !owner.name ||
      !owner.phone
    ) {
      throw new Error("fields required: name, phone");
    }
    res.send(await OwnerService.createOwner(owner));
    logger.info(`POST /owners - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

async function getOwners(req, res, next) {
  try {
    res.send(await OwnerService.getOwners());
    logger.info(`GET /owners`);
  } catch (err) {
    next(err);
  }
}

async function getOwner(req, res, next) {
  try {
    const owner = res.send(await OwnerService.getOwner(req.params.id));
    logger.info(`GET /owners - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteOwner(req, res, next) {
  try {
    const owner = await OwnerService.deleteOwner(req.params.id);
    res.end();
    logger.info(`DELETE /owners - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

async function updateOwner(req, res, next) {
  try {
    const owner = req.body;
    if (
      !req.params.id ||
      !owner.name ||
      !owner.phone
    ) {
      throw new Error("fields required: name, phone");
    }
    const updatedOwner = res.send(await OwnerService.updateOwner(owner, req.params.id));
    logger.info(`PUT /owners - ${JSON.stringify(updatedOwner)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createOwner,
  getOwners,
  getOwner,
  deleteOwner,
  updateOwner
}
