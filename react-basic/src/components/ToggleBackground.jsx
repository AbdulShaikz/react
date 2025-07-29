import { useState } from "react";

const ToggleBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="toggle-background" style={{
      backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
      color: isDarkMode ? '#f0f0f0' : '#333',
      height: '100vh',
    }}>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <style jsx>{`
        .toggle-button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          outline: 1px solid red;
          cursor: pointer;
          color: white;
        }
        .toggle-button.light {
          background-color: #f0f0f0;
          color: black;
        }
        .toggle-button.dark {
          background-color: #333;
          color: white;
        }
      `}</style>
    </div>
  )
}

export default ToggleBackground