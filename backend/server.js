import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import vaultRoutes from "./routes/vault.js";
import { openDb } from "./db/db.js";
import { createTestUser } from "./db/helper.js";
import cors from "cors";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"  // allow your frontend
}));

// Initialize database and test user
async function init() {
  await openDb();          // ensures tables exist
  await createTestUser();  // creates a default test user if not exists
  console.log("Database initialized and test user ready");
}

// Call initialization
init();

// Routes
app.use("/login", authRoutes);
app.use("/vault", vaultRoutes);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));