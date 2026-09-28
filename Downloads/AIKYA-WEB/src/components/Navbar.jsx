import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-symbol">
            <span className="symbol-dot"></span>
            <span className="symbol-pulse"></span>
          </div>
          <div className="brand-text-group">
            <span className="brand-title">AIKYA</span>
            <span className="brand-edition">2026</span>
          </div>
          <span className="brand-dept-tag">ECE FEST</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-index">01</span>
            <span className="nav-label">HOME</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-index">02</span>
            <span className="nav-label">ABOUT</span>
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-index">03</span>
            <span className="nav-label">MISSIONS</span>
          </NavLink>

          <NavLink
            to="/registration"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-index">04</span>
            <span className="nav-label">REGISTRATION</span>
          </NavLink>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="navbar-actions">
          <Link to="/registration" className="nav-cta-btn">
            <span className="cta-glitch-border"></span>
            <span className="cta-text">REGISTER NOW</span>
            <span className="cta-arrow">→</span>
          </Link>

          <button
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-decor">
          <span className="decor-line"></span>
          <span className="decor-tag">SYS // NAV_GRID_ONLINE</span>
        </div>
        <nav className="mobile-nav-links">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="mobile-link-idx">01</span>
            <span className="mobile-link-txt">HOME</span>
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="mobile-link-idx">02</span>
            <span className="mobile-link-txt">ABOUT</span>
          </NavLink>

          <NavLink
            to="/events"
            onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="mobile-link-idx">03</span>
            <span className="mobile-link-txt">MISSIONS</span>
          </NavLink>

          <NavLink
            to="/registration"
            onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="mobile-link-idx">04</span>
            <span className="mobile-link-txt">REGISTRATION</span>
          </NavLink>

          <Link
            to="/registration"
            onClick={closeMenu}
            className="mobile-cta-btn"
          >
            ENTER THE FEST →
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;