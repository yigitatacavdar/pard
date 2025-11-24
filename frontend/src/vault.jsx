import React, { useState } from "react";

function Vault({ username }) {
  const [vaultItems, setVaultItems] = useState([]);
  const [site, setSite] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();

    if (!site.trim() || !user.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(), // simple unique id
      site,
      username: user,
      password,
    };

    setVaultItems([newItem, ...vaultItems]); // add new item to top
    setSite("");
    setUser("");
    setPassword("");
  };

  return (
    <div
      className="vault-container"
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      <h1>Welcome, {username}!</h1>
      <p>This is your vault.</p>

      {/* Add new item form */}
      <form
        onSubmit={handleAddItem}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          display: "flex",
          flexDirection: "column",
          width: "250px",
          padding: "10px",
          border: "1px solid #eee",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <input
          type="text"
          placeholder="Site"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          style={{ marginBottom: "5px", padding: "6px" }}
        />
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={{ marginBottom: "5px", padding: "6px" }}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "5px", padding: "6px" }}
        />
        <button type="submit" style={{ padding: "6px" }}>
          Add Item
        </button>
      </form>

      {/* List of vault items */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "100px" }}>
        {vaultItems.map((item) => (
          <li
            key={item.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #eee",
              borderRadius: "4px",
            }}
          >
            <strong>Site:</strong> {item.site} <br />
            <strong>Username:</strong> {item.username} <br />
            <strong>Password:</strong> {item.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vault;
