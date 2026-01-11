import { getSqids } from "./sqid";
import { getPool } from "./db";

const base64ToBuf = (str: string) => Uint8Array.from(atob(str), c => c.charCodeAt(0));
const decoder = new TextDecoder();
const sqids = getSqids();
const pool = getPool();

export async function decryptMessage(keyString: string, id: string) {
    const decodedId: number = sqids.decode(id)[0];
    const client = await pool.connect();
    const query = "SELECT iv, encrypted_blob WHERE ID = $1;"
    const result = await client.query(query, [decodedId]);

    if (result.rows.length === 0) {
        throw new Error("Message not found");
    }

    const key = await window.crypto.subtle.importKey(
      "raw",
      base64ToBuf(keyString),
      "AES-GCM",
      false,
      ["decrypt"]
    );
  
    try {
      const decryptedBuf = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: base64ToBuf(result.rows[0].iv) },
        key,
        base64ToBuf(result.rows[0].encrypted_blob)
      );
  
      return decoder.decode(decryptedBuf);
    } catch (e) {
      return "Decryption failed. Wrong key or corrupted data.";
    }
  }