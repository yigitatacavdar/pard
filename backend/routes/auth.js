import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { openDb } from "../db/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ msg: "Missing credentials" });

  try {
    const db = await openDb();
    const user = await db.get("SELECT * FROM users WHERE username = ?", [username]);

    if (!user) return res.status(401).json({ msg: "Invalid username or password" });

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(401).json({ msg: "Invalid username or password" });

    // Create JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET || "secret", {
      expiresIn: "1h",
    });

    res.json({ token, username: user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
