"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiUser, FiX } from "react-icons/fi";
import "./auth.css";

export default function AuthContainer() {
  /* ================== STATE ================== */
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  /* ================== FUNCTIONS ================== */
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setError("");
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
    setError("");
  };

  const handleLoginSubmit = () => {
    if (!loginData.username || !loginData.password) {
      setError("Both fields are required");
      return;
    }

    setError("");
    console.log("Login data:", loginData);
  };

  const handleSignupSubmit = () => {
    if (!signupData.username || !signupData.email || !signupData.password) {
      setError("All fields are required");
      return;
    }

    setError("");
    console.log("Signup data:", signupData);
  };

  const handleSocialClick = (provider: string) => {
    console.log(`${provider} sign-in clicked`);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  /* ================== JSX ================== */
  return (
    <motion.div
      className="auth-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        className="close-btn"
        onClick={() => router.push("/")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Back to Home"
      >
        <FiX size={24} />
      </motion.button>
      <motion.div
        className={`auth-container ${isSignup ? "active" : ""}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LOGIN FORM */}
        <div className="form-panel login">
          <motion.h2
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome Back
          </motion.h2>

          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
              <FiUser size={18} />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleLoginChange}
              className="pl-10"
            />
          </motion.div>

          <motion.div
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
              <FiLock size={18} />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="pl-10"
            />
          </motion.div>

          {error && (
            <motion.p
              className="error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.p>
          )}

          <motion.button
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLoginSubmit}
          >
            Sign In
          </motion.button>

          <motion.div
            custom={4}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="or-separator"
          >
            <span>or</span>
          </motion.div>

          <motion.div
            custom={5}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="socials"
          >
            <motion.button
              type="button"
              className="social-btn"
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSocialClick("Google")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.35 11.1H12v2.8h5.35c-.23 1.3-1 2.4-2.14 3.14v2.6h3.46c2.02-1.86 3.18-4.6 3.18-7.95 0-.6-.05-1.18-.15-1.74z" fill="#4285F4"/>
                <path d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.46-2.6c-.96.65-2.2 1.03-3.16 1.03-2.43 0-4.49-1.64-5.23-3.84H3.12v2.41C4.77 19.75 8.12 22 12 22z" fill="#34A853"/>
                <path d="M6.77 13.16A6.99 6.99 0 016 12c0-.34.04-.67.12-.99V8.6H3.12A9.99 9.99 0 002 12c0 1.6.38 3.11 1.05 4.42l3.7-3.26z" fill="#FBBC05"/>
                <path d="M12 6.5c1.47 0 2.8.5 3.84 1.48l2.86-2.86C16.95 3.55 14.7 2.5 12 2.5 8.12 2.5 4.77 4.75 3.12 7.99l3.7 2.41C7.51 8.14 9.57 6.5 12 6.5z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </motion.button>
          </motion.div>

          <motion.p
            custom={6}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Don't have an account?{" "}
            <span className="link" onClick={() => setIsSignup(true)}>
              Sign up
            </span>
          </motion.p>
        </div>

        {/* SIGNUP FORM */}
        <div className="form-panel signup">
          <motion.h2
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Create Account
          </motion.h2>

          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
              <FiUser size={18} />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={signupData.username}
              onChange={handleSignupChange}
              className="pl-10"
            />
          </motion.div>

          <motion.div
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
              <FiMail size={18} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleSignupChange}
              className="pl-10"
            />
          </motion.div>

          <motion.div
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
              <FiLock size={18} />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleSignupChange}
              className="pl-10"
            />
          </motion.div>

          {error && (
            <motion.p
              className="error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.p>
          )}

          <motion.button
            custom={4}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSignupSubmit}
          >
            Sign Up
          </motion.button>

          <motion.div
            custom={5}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="or-separator"
          >
            <span>or</span>
          </motion.div>

          <motion.div
            custom={6}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="socials"
          >
            <motion.button
              type="button"
              className="social-btn"
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSocialClick("Google")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.35 11.1H12v2.8h5.35c-.23 1.3-1 2.4-2.14 3.14v2.6h3.46c2.02-1.86 3.18-4.6 3.18-7.95 0-.6-.05-1.18-.15-1.74z" fill="#4285F4"/>
                <path d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.46-2.6c-.96.65-2.2 1.03-3.16 1.03-2.43 0-4.49-1.64-5.23-3.84H3.12v2.41C4.77 19.75 8.12 22 12 22z" fill="#34A853"/>
                <path d="M6.77 13.16A6.99 6.99 0 016 12c0-.34.04-.67.12-.99V8.6H3.12A9.99 9.99 0 002 12c0 1.6.38 3.11 1.05 4.42l3.7-3.26z" fill="#FBBC05"/>
                <path d="M12 6.5c1.47 0 2.8.5 3.84 1.48l2.86-2.86C16.95 3.55 14.7 2.5 12 2.5 8.12 2.5 4.77 4.75 3.12 7.99l3.7 2.41C7.51 8.14 9.57 6.5 12 6.5z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </motion.button>
          </motion.div>

          <motion.p
            custom={7}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Already have an account?{" "}
            <span className="link" onClick={() => setIsSignup(false)}>
              Sign in
            </span>
          </motion.p>
        </div>

        {/* OVERLAY PANEL */}
        <motion.div
          className="overlay-panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2>{isSignup ? "Welcome!" : "Hello, Friend!"}</h2>
            <p>
              {isSignup
                ? "Sign in with your personal details to continue your journey with us."
                : "Enter your personal details and start your amazing AI-powered creative journey."}
            </p>
            <motion.button
              className="overlay-toggle"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Sign In" : "Sign Up"}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
