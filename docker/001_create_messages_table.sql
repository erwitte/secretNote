CREATE TABLE messages (
  id TEXT PRIMARY KEY,       -- the 'asdfqw' part
  iv TEXT NOT NULL,          -- the initialization vector
  encrypted_blob TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);
