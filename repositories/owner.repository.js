import { connect } from "./db.js";

async function createOwner(owner) {
  const conn = await connect();
  try {
    const sql = "INSERT INTO owners (name, phone) VALUES ($1, $2) RETURNING *";
    const values = [owner.name, owner.phone];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getOwners() {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM owners");
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getOwner(id) {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM owners WHERE id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateOwner(owner, id) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE owners SET name = $1, phone = $2 WHERE id = $3 RETURNING *";
    const values = [owner.name, owner.phone, id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteOwner(id) {
  const conn = await connect();
  try {
    const res = await conn.query("DELETE FROM owners WHERE id = $1", [
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
  createOwner,
  getOwners,
  getOwner,
  updateOwner,
  deleteOwner,
};
