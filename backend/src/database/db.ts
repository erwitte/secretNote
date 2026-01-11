import { Pool } from 'pg';
import Sqids from "sqids";

const pool = new Pool({
    connectionString: 'postgres://myuser:mysecretpassword@localhost:5432/mydatabase'
  });

const sqids = new Sqids({
  minLength: 4,
})

function getPool(){
    return pool;
}

export async function storeMessage(iv: string, encrypted_blob: string): Promise<string> {
  const client = await pool.connect();
  try {
    const dbLenght: number = (await client.query("SELECT * FROM messages")).rows.length;
    const id = sqids.encode([dbLenght]);

    const query = `
      INSERT INTO messages(id, iv, encrypted_blob)
      VALUES($1, $2, $3)
    `;
    await client.query(query, [id, iv, encrypted_blob]);

    return id; // This is safe to return for URL usage
  }catch (error) {
    console.error("API Error:", error); 
    return "error saving message";
  } finally {
    client.release();
  }
}