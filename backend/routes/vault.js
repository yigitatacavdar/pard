import express from "express";
import { openDb } from "../db/db.js";
import { encrypt, decrypt } from "../utils/crypto.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware to verify token
router.use(async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || "secret");
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
});

// Get vault items
router.get("/", async (req, res) => {
  const db = await openDb();
  const items = await db.all("SELECT * FROM vault_items WHERE user_id = ?", [req.user.id]);
  res.json(items.map(i => ({ ...i, password: decrypt(i.password_encrypted) })));
});

// Add vault item
router.post("/", async (req, res) => {
  const { site, username, password } = req.body;
  const db = await openDb();
  const encrypted = encrypt(password);
  await db.run(
    "INSERT INTO vault_items (user_id, site, username, password_encrypted) VALUES (?, ?, ?, ?)",
    [req.user.id, site, username, encrypted]
  );
  res.json({ msg: "Saved" });
});

export default router;