import { useState } from "react";
import "./App.css";

function App() {
  const [settings, setSettings] = useState({
    name: "",
    email: "",
    theme: "Light",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings Saved!");
  };

  return (
    <div className="container">
      <h1>Settings Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={settings.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={settings.email}
          onChange={handleChange}
        />

        <select
          name="theme"
          value={settings.theme}
          onChange={handleChange}
        >
          <option>Light</option>
          <option>Dark</option>
        </select>

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default App;