CREATE TABLE messages (
  id TEXT PRIMARY KEY,       -- the 'asdfqw' part
  iv BYTEA NOT NULL,          -- the initialization vector
  encrypted_blob BYTEA NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);
