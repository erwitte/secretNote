import { getSqids } from "./sqid";
import { getPool } from "./db";

const sqids = getSqids();
const pool = getPool();

export async function getEncyptedMessage(id: string) {
    const decodedId: number = sqids.decode(id)[0];
    const client = await pool.connect();
    const query = "SELECT iv, encrypted_blob WHERE ID = $1;"
    const result = await client.query(query, [decodedId]);

    if (result.rows.length === 0) {
        throw new Error("Message not found");
    }

    return {
        iv: result.rows[0].iv,
        encrypted_blob: result.rows[0].encrypted_blob
    }
  }