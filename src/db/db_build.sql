BEGIN;

DROP TABLE IF EXISTS chatlog CASCADE;

CREATE TABLE chatlog (
  id SERIAL PRIMARY KEY,
  originalmessage Text,
  originalmessage_langcode VARCHAR(2) NOT NULL,
  translatedmessage Text,
  translatedmessage_langcode VARCHAR(2) NOT NULL
);

INSERT INTO chatlog (originalmessage, originalmessage_langcode, translatedmessage, translatedmessage_langcode) VALUES
('young bench 4-6-3 backstop walk off small ball. ', 'en', 'ung bank 4-6-3 bakstop vandrar av liten boll', 'sv');


COMMIT;