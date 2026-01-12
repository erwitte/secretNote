import { Pool } from 'pg';
import { getSqids } from './sqid';

const pool = new Pool({
    connectionString: 'postgres://myuser:mysecretpassword@localhost:5432/mydatabase'
  });

export function getPool(){
  return pool;
}

const sqids = getSqids();

export async function storeMessage(iv: string, encrypted_blob: string): Promise<string> {
  const client = await pool.connect();
  try {
    const dbLenght: number = (await client.query("SELECT * FROM messages")).rows.length;
    const encryptedId = sqids.encode([dbLenght]);

    const query = `
      INSERT INTO messages(id, iv, encrypted_blob)
      VALUES($1, $2, $3)
    `;
    await client.query(query, [dbLenght, iv, encrypted_blob]);

    return encryptedId; // This is safe to return for URL usage
  }catch (error) {
    console.error("API Error:", error); 
    return "error saving message";
  } finally {
    client.release();
  }
}

export async function getEncyptedMessage(id: string) {
  const decodedId: number = sqids.decode(id)[0];
  console.log("id: ", decodedId);
  const client = await pool.connect();
  const query = "SELECT iv, encrypted_blob FROM messages WHERE ID = $1;"
  const result = await client.query(query, [decodedId]);

  if (result.rows.length === 0) {
      throw new Error("Message not found");
  }

  return {
      iv: result.rows[0].iv,
      encrypted_blob: result.rows[0].encrypted_blob
  }
}