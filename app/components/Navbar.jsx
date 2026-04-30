"use client";

import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <div className="nav-logo-icon">
              <GraduationCap size={22} />
            </div>
            <div className="nav-logo-text">
              Study<span>Albania</span>
            </div>
          </Link>

          {/* Center Links */}
          <div className="nav-links">
            {[
              { href: "/", label: "Home" },
              { href: "/universities", label: "Universities" },
              { href: "/courses", label: "Courses" },
              { href: "/placements", label: "Placements" },
              { href: "/living-costs", label: "Living & Costs" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="nav-item">
                {link.label}
                <span className="nav-item-underline" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="nav-actions">
            <Link href="#" className="nav-phone">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </Link>
            <Link href="#" className="nav-apply-btn">
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {[
              { href: "/", label: "Home" },
              { href: "/universities", label: "Universities" },
              { href: "/courses", label: "Courses" },
              { href: "/placements", label: "Placements" },
              { href: "/living-costs", label: "Living & Costs" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={link.href} className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mobile-menu-divider" />
            <Link href="#" className="mobile-nav-phone" onClick={() => setIsMobileMenuOpen(false)}>
              <Phone size={16} />
              +91 98765 43210
            </Link>
            <Link href="#" className="nav-apply-btn mobile-apply" onClick={() => setIsMobileMenuOpen(false)}>
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
