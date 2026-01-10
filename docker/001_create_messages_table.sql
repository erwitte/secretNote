CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);
