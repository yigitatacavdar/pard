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
    {(() => {
      if (!loggedIn) {
        return <Login onLogin={(username) => { setUser(username); setLoggedIn(true); }} />;
        // goes to login.jsx and lookin function onLogin sets as username toggle setLoggedin torenderV
      } else {
        return <Vault username={user} />;
      }
    })()}
  </div>
);


}


export default App;
