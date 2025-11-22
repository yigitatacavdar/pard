// src/App.jsx
import { useEffect, useState } from 'react';

function App() {
  const [pingResult, setPingResult] = useState('not called yet');

  useEffect(() => {
    // Test the bridge (will work once we have ping wired up)
    if (window.electronAPI?.ping) {
      window.electronAPI.ping().then((result) => {
        setPingResult(result);
      }).catch(() => {
        setPingResult('error');
      });
    }
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Local Password Manager</h1>
      <p>This is React running inside an Electron desktop window.</p>

      <h2>Status</h2>
      <ul>
        <li>Electron window: ✅ (if you can see this)</li>
        <li>React running: ✅</li>
        <li>IPC ping result: {pingResult}</li>
      </ul>

      <p>Next steps: add master password screen, vault list, and encryption logic.</p>
    </div>
  );
}

export default App;
