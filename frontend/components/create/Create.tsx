"use client";

import { useState, useRef, useEffect } from "react";
import "./create.css";

export default function Create() {
  const [loading, setLoading] = useState(false);
  const [hasHistory, setHasHistory] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close profile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleGenerate = () => {
    setLoading(true);

    // simulate generation
    setTimeout(() => {
      setLoading(false);
      setHasHistory(true);
    }, 3000);
  };

  return (
    <div className="create-page">
      {/* ================= HEADER ================= */}
      <header className="create-header">
        <div className="create-logo">GenAI</div>

        <div className="profile-menu" ref={menuRef}>
          <div
            className="create-avatar"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {menuOpen && (
            <div className="profile-dropdown">
              <div className="profile-info">
                <strong>User</strong>
                <span>user@gmail.com</span>
              </div>

              <div className="profile-actions">
                <button>🕘 History</button>
                <button>⚙️ Account</button>
                <button>📄 Usage</button>
              </div>

              <div className="profile-logout">
                <button>🚪 Logout</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= PROMPT ================= */}
      <section className="create-hero">
        <h1>What do you want to create?</h1>
        <p>Describe your idea or choose a creation mode</p>

        <div className="prompt-container">
          <textarea
            placeholder="Write a blog, generate an image, research a topic..."
            disabled={loading}
          />

          <div className="prompt-actions">
            <div className="prompt-options">
              <span>➕ Add files</span>
              <span>🖼️ Image</span>
              <span>🔍 Research</span>
              <span>📔 Blog</span>
              <span>🧠 Thinking</span>
            </div>

            <button onClick={handleGenerate} disabled={loading}>
              {loading ? <span className="loader" /> : "Generate"}
            </button>
          </div>
        </div>
      </section>

      {/* ================= HISTORY ================= */}
      {hasHistory && (
        <section className="create-history">
          <h2>Your Previous Creations</h2>

          <div className="create-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="create-card">
                <div className="create-preview" />
                <p>Generated content #{i + 1}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
