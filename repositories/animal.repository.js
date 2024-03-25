import { connect } from "./db.js";

async function createAnimal(animal) {
  const conn = await connect();
  try {
    const sql = "INSERT INTO animals (name, type, owner_id) VALUES ($1, $2, $3) RETURNING *";
    const values = [animal.name, animal.type, animal.owner_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimals() {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM animals");
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimalsByOwner(owner_id) {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM animals WHERE owner_id = $1", [
      owner_id,
    ]);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM animals WHERE id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateAnimal(animal, id) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE animals SET name = $1, type = $2, owner_id = $3 WHERE id = $4 RETURNING *";
    const values = [animal.name, animal.type, animal.owner_id, id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query("DELETE FROM animals WHERE id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimalsByOwner,
};
