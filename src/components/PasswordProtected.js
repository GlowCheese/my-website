import React, { useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function PasswordProtected({ page, children }) {
  const { colorMode } = useColorMode();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const checkPassword = async () => {
    const response = await fetch("/.netlify/functions/protected", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page, password }),
    });
    const data = await response.json();

    if (data.access) {
      setIsAuthenticated(true);
    } else {
      alert("Wrong password! Who tf are you?");
    }
  };

  const isDarkMode = colorMode === "dark";
  const backgroundColor = isDarkMode ? "#1e293b" : "#f3f4f6";
  const textColor = isDarkMode ? "#e2e8f0" : "#374151";
  const inputBorderColor = isDarkMode ? "#475569" : "#d1d5db";
  const buttonBgColor = isDarkMode ? "#2563eb" : "#3b82f6";
  const buttonHoverColor = isDarkMode ? "#1d4ed8" : "#2563eb";

  return (
    <div>
      {!isAuthenticated ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor,
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "320px",
            margin: "auto",
            marginTop: "50px",
            color: textColor,
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
            Welcome back! 👋
          </h2>

          <input
            type="password"
            placeholder="Enter the password..."
            style={{
              width: "100%",
              padding: "12px",
              border: `1px solid ${inputBorderColor}`,
              borderRadius: "8px",
              textAlign: "center",
              outline: "none",
              backgroundColor: isDarkMode ? "#334155" : "#fff",
              color: textColor,
            }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={checkPassword}
            style={{
              width: "100%",
              marginTop: "16px",
              backgroundColor: buttonBgColor,
              color: "white",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonBgColor)}
          >
            Confirm!
          </button>
        </div>
      ) : (
        <div style={{
          maxWidth: "600px",
          margin: "auto",
          padding: "20px",
          color: textColor
        }}>
          {children}
        </div>
      )}
    </div>
  );
}
