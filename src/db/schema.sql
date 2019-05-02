BEGIN;

CREATE TABLE chatlog (
  id SERIAL PRIMARY KEY,
  originalmessage Text,
  originalmessage_langcode VARCHAR(2) NOT NULL,
  translatedmessage Text,
  translatedmessage_langcode VARCHAR(2) NOT NULL
);

COMMIT;
