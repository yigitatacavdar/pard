// src/App.jsx
import React, { useState } from "react";
import Login from "./login.jsx";
import Vault from "./vault.jsx";
import "./index.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div className="app-container">
      {!loggedIn ? (
        <Login onLogin={(username) => { setUser(username); setLoggedIn(true); }} />
      ) : (
        <Vault username={user} />
      )}
    </div>
  );

}

export default App;
