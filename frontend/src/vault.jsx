// vault form component

import React from "react";

function Vault({ username }) {
  return (
    <div className="vault-container">
      <h1>Welcome, {username}!</h1>
      <p>This is your vault.</p>
      {/* Later you can fetch vault items from backend here */}
    </div>
  );
}

export default Vault;