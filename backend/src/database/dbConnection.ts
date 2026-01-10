import { Pool } from 'pg';

const pool = new Pool({
    connectionString: 'postgres://myuser:mysecretpassword@localhost:5432/mydatabase'
  });

function getPool(){
    return pool;
}