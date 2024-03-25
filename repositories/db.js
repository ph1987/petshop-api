import pg from "pg";
import 'dotenv/config';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString: process.env.CONN_STRING,
  });
  global.connection = pool;
  return pool.connect();
}

export {
  connect
}