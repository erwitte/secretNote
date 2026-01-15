import { Pool } from 'pg';
import { getSqid } from './sqid';
import { Buffer } from "buffer";


const pool = new Pool({
    connectionString: 'postgres://myuser:mysecretpassword@localhost:5432/mydatabase'
  });

export function getPool(){
  return pool;
}

const sqids = getSqid();

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
  const client = await pool.connect();
  
  try {
    const query = "SELECT iv, encrypted_blob FROM messages WHERE ID = $1;";
    const result = await client.query(query, [decodedId]);

    if (result.rows.length === 0) {
      throw new Error("Message not found");
    }

    // result.rows[0].iv and encrypted_blob are already strings from the TEXT column
    return {
      iv: result.rows[0].iv,
      encryptedBlob: result.rows[0].encrypted_blob
    };
  } finally {
    client.release();
  }
}

export async function deleteMessageById(id: string){
  const decodedId: number = sqids.decode(id)[0];
  const client = await pool.connect();

  try{
    const query = "DELETE FROM messages WHERE ID = $1;";
    const result = await client.query(query, [decodedId]);
  }

  finally {
    client.release();
  }
}