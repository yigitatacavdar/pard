// login form component

import React, { useState } from "react";

function Login({onLogin}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    if (username.trim() && password.trim()) {
        onLogin(username);
    } else {
        alert("Please enter username and password");
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
