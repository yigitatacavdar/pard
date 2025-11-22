import { openDb } from "./db.js";
import bcrypt from "bcrypt";

// Create a test user if it doesn't exist
export async function createTestUser(username = "test", password = "1234") {
  const db = await openDb();

  const existing = await db.get("SELECT * FROM users WHERE username = ?", [username]);
  if (existing) return;

  const hash = await bcrypt.hash(password, 10);
  await db.run("INSERT INTO users (username, password_hash) VALUES (?, ?)", [username, hash]);
  console.log(`Test user '${username}' created`);
}