import React, { useEffect, useState } from "react";
import "./Mustang.css";

export default function MustangLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="page">
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#home">MUSTANG</a>

          <button
            className="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#models" onClick={() => setMenuOpen(false)}>Models</a>
            <a href="#performance" onClick={() => setMenuOpen(false)}>Performance</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-content">
            <span className="eyebrow">Legendary American Muscle</span>
            <h1>Ford Mustang</h1>
            <p>Experience bold design, thrilling performance, and modern technology in a responsive, premium automotive showcase.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#models">Explore Models</a>
              <a className="btn btn-secondary" href="#gallery">View Gallery</a>
            </div>
          </div>
        </section>

        <section className="container section" id="performance">
          <h2 className="section-title">Why Mustang?</h2>
          <p className="section-subtitle">Built to deliver excitement, control, and unmistakable presence on every drive.</p>
          <div className="feature-grid">
            <article className="card">
              <h3>Power Engine</h3>
              <p>Driver-focused performance with instant throttle response and a muscular feel.</p>
            </article>
            <article className="card">
              <h3>Aggressive Design</h3>
              <p>Bold lines, wide stance, and a low profile that instantly signals Mustang DNA.</p>
            </article>
            <article className="card">
              <h3>Advanced Tech</h3>
              <p>Digital displays, smart controls, and seamless in-cabin connectivity.</p>
            </article>
          </div>
        </section>

        <section className="container section" id="models">
          <h2 className="section-title">Performance Highlights</h2>
          <p className="section-subtitle">A quick snapshot of the kind of presence and capability Mustang is known for.</p>
          <div className="specs-grid">
            <div className="spec"><strong>V8</strong><span>Performance heart</span></div>
            <div className="spec"><strong>RWD</strong><span>Rear-wheel drive</span></div>
            <div className="spec"><strong>Digital</strong><span>Cockpit interface</span></div>
            <div className="spec"><strong>Drive</strong><span>Selectable modes</span></div>
          </div>
        </section>

        <section className="container section" id="gallery">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">A clean image layout that adapts across desktop, tablet, and mobile screens.</p>
          <div className="gallery-grid">
            <div className="gallery-item g1">
              <img src="https://www.spinny.com/blog/wp-content/uploads/2024/07/Ford-Mustang-Dark-Horse-jpg.webp" alt="Ford Mustang front view" />
            </div>
            <div className="gallery-item g2">
              <img src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80" alt="Ford Mustang side view" />
            </div>
            <div className="gallery-item g3">
              <img src="https://i.ytimg.com/vi/5oFP0YgSoDM/sddefault.jpg" alt="Ford Mustang rear view" />
            </div>
          </div>
        </section>

        <section className="container section cta" id="contact">
          <div className="cta-box">
            <div>
              <h2>Ready to build your Mustang page?</h2>
              <p>Use this as a strong foundation and customize colors, sections, and content for your project.</p>
            </div>
            <a className="btn btn-primary" href="https://www.ford.com/cars/mustang/" target="_blank" rel="noreferrer">
              Official Mustang
            </a>
          </div>
        </section>
      </main>

      <footer>© 2026 Ford Mustang</footer>
    </div>
  );
}