// login form component

import React, { useState } from "react";

function Login({onLogin}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!username.trim() || !password.trim()) {
    alert("Please enter username and password");
    return;
  }

  try {
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.msg || "Login failed");
      return;
    }

    // Login successful
    console.log("JWT token:", data.token); // you can save it in memory or localStorage
    onLogin(data.username); // tell App.jsx user is logged in
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};

    return (
        <form className="login-form" onSubmit={handleSubmit}
        style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            margin: "100px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
        }}
        >
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "10px", padding: "8px" }}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px" }}>
            Login
        </button>
        </form>
    );
}

export default Login;
