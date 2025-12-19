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

  const handleSocialClick = (provider: string) => {
    console.log(`${provider} sign-in clicked`);
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

          <div className="or-separator"><span>or</span></div>

          <div className="socials">
            <button
              type="button"
              className="social-btn google"
              onClick={() => handleSocialClick("Google")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M21.35 11.1H12v2.8h5.35c-.23 1.3-1 2.4-2.14 3.14v2.6h3.46c2.02-1.86 3.18-4.6 3.18-7.95 0-.6-.05-1.18-.15-1.74z" fill="#4285F4"/>
                <path d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.46-2.6c-.96.65-2.2 1.03-3.16 1.03-2.43 0-4.49-1.64-5.23-3.84H3.12v2.41C4.77 19.75 8.12 22 12 22z" fill="#34A853"/>
                <path d="M6.77 13.16A6.99 6.99 0 016 12c0-.34.04-.67.12-.99V8.6H3.12A9.99 9.99 0 002 12c0 1.6.38 3.11 1.05 4.42l3.7-3.26z" fill="#FBBC05"/>
                <path d="M12 6.5c1.47 0 2.8.5 3.84 1.48l2.86-2.86C16.95 3.55 14.7 2.5 12 2.5 8.12 2.5 4.77 4.75 3.12 7.99l3.7 2.41C7.51 8.14 9.57 6.5 12 6.5z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

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

          <div className="or-separator"><span>or</span></div>

          <div className="socials">
            <button
              type="button"
              className="social-btn google"
              onClick={() => handleSocialClick("Google")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M21.35 11.1H12v2.8h5.35c-.23 1.3-1 2.4-2.14 3.14v2.6h3.46c2.02-1.86 3.18-4.6 3.18-7.95 0-.6-.05-1.18-.15-1.74z" fill="#4285F4"/>
                <path d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.46-2.6c-.96.65-2.2 1.03-3.16 1.03-2.43 0-4.49-1.64-5.23-3.84H3.12v2.41C4.77 19.75 8.12 22 12 22z" fill="#34A853"/>
                <path d="M6.77 13.16A6.99 6.99 0 016 12c0-.34.04-.67.12-.99V8.6H3.12A9.99 9.99 0 002 12c0 1.6.38 3.11 1.05 4.42l3.7-3.26z" fill="#FBBC05"/>
                <path d="M12 6.5c1.47 0 2.8.5 3.84 1.48l2.86-2.86C16.95 3.55 14.7 2.5 12 2.5 8.12 2.5 4.77 4.75 3.12 7.99l3.7 2.41C7.51 8.14 9.57 6.5 12 6.5z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

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
