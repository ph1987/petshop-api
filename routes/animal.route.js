import express from "express";
import AnimalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", AnimalController.createAnimal);
router.get("/:id", AnimalController.getAnimal);
router.get("/", AnimalController.getAnimals);
router.delete("/:id", AnimalController.deleteAnimal);
router.put("/:id", AnimalController.updateAnimal);

export default router;