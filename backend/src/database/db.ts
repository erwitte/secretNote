import { Pool } from 'pg';
import Sqids from "sqids";

const pool = new Pool({
    connectionString: 'postgres://myuser:mysecretpassword@localhost:5432/mydatabase'
  });

const sqids = new Sqids({
  minLength: 3,
})

function getPool(){
    return pool;
}

function storeMessage(iv: string, blob: string){

}