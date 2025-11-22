import crypto from "crypto";

const SECRET_KEY = "32-character-long-secret-key!!"; // must be 32 chars
const IV = Buffer.alloc(16, 0); // initialization vector

export function encrypt(text) {
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(SECRET_KEY), IV);
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
}

export function decrypt(hash) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(SECRET_KEY), IV);
  return decipher.update(hash, "hex", "utf8") + decipher.final("utf8");
}