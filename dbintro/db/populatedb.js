#! /usr/bin/env node

const { Client } = require("pg");
const { Pool } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Pool({
    host: "localhost", // or wherever the db is hosted
    user: "amdsa",
    database: "top_users",
    password: "Ahmed#3404",
    port: 5432, // The default port
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
