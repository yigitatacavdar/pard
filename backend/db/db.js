import sqlite3 from "sqlite3";
import { open } from "sqlite";
import bcrypt from "bcrypt";

const DB_FILE = "./db/vault.db";

export async function openDb() {

    const db = await open({
        filename: DB_FILE,
        driver: sqlite3.Database,
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password_hash TEXT
    )
    `);

    await db.exec(`
    CREATE TABLE IF NOT EXISTS vault_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      site TEXT,
      username TEXT,
      password_encrypted TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
    `)

    console.log("Database ready");

    return db;

}