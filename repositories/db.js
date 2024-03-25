import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString: "postgres://wigtatdc:DcP-4xRXyboj2PTk7gBRFqBd7F34GyiT@kesavan.db.elephantsql.com/wigtatdc"
  });
  global.connection = pool;
  return pool.connect();
}

export {
  connect
}