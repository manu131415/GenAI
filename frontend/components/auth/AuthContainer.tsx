"use client";

import { useState } from "react";
import "./auth.css";

export default function AuthContainer() {
  /* ================== STATE ================== */
  const [isSignup, setIsSignup] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  /* ================== FUNCTIONS ================== */
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = () => {
    if (!loginData.username || !loginData.password) {
      setError("Both fields are required");
      return;
    }

    setError("");
    console.log("Login data:", loginData);
  };

  /* ================== JSX ================== */
  return (
    <div className="auth-page">
      <div className={`auth-container ${isSignup ? "active" : ""}`}>

        {/* LOGIN FORM */}
        <div className="form-panel login">
          <h2>Login</h2>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleLoginChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
          />

          {error && <p className="error">{error}</p>}

          <button onClick={handleLoginSubmit}>Login</button>

          <p>
            Don’t have an account?{" "}
            <span className="link" onClick={() => setIsSignup(true)}>
              Sign up
            </span>
          </p>
        </div>

        {/* SIGNUP FORM (we will validate later) */}
        <div className="form-panel signup">
          <h2>Create Account</h2>

          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign Up</button>

          <p>
            Already have an account?{" "}
            <span className="link" onClick={() => setIsSignup(false)}>
              Login
            </span>
          </p>
        </div>

        {/* PURPLE PANEL */}
<div className="overlay-panel">
  <h1>{isSignup ? "HELLO FRIEND!" : "WELCOME BACK!"}</h1>

  <p>
    {isSignup
      ? "Enter your personal details and start your journey with us"
      : "To keep connected with us please login with your personal info"}
  </p>

  {/* <button
    className="ghost-btn"
    onClick={() => setIsSignup(!isSignup)}
  >
    {isSignup ? "Login" : "Sign Up"}
  </button> */}
</div>


      </div>
    </div>
  );
}
