"use client";

import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone, ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/universities", label: "Universities" },
    { href: "/courses", label: "Courses" },
    { href: "/placements", label: "Placements" },
    { href: "/living-costs", label: "Living & Costs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} style={{ 
        background: 'white',
        padding: scrolled ? '12px 0' : '20px 0',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="nav-logo" style={{ color: 'var(--deep-navy)' }}>
            <GraduationCap size={32} strokeWidth={2.5} color="var(--energy-yellow)" />
            <div style={{ color: 'var(--deep-navy)' }}>Study<span style={{ color: 'var(--energy-yellow)' }}>Albania</span></div>
          </Link>

          {/* Center Links */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="nav-item"
                style={{ color: 'var(--deep-navy)', opacity: 0.8 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--deep-navy)', fontWeight: 700, fontSize: '0.9rem', opacity: 0.7 }}>
              <Phone size={18} color="var(--energy-yellow)" />
              <span>+91 98765 43210</span>
            </div>
            <Link href="/courses" className="btn btn-gold" style={{ padding: '12px 32px', fontSize: '0.9rem', borderRadius: '12px', background: 'var(--energy-yellow)', color: 'var(--deep-navy)' }}>
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-menu-btn"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--deep-navy)' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'fixed', top: 0, right: 0, bottom: 0, 
              width: '100%', maxWidth: '320px', 
              background: 'white', padding: '100px 40px', 
              zIndex: 3000, display: 'flex', flexDirection: 'column', gap: '32px', 
              boxShadow: '-20px 0 60px rgba(0,0,0,0.1)'
            }}
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ position: 'absolute', top: '40px', right: '40px', background: 'none', border: 'none', color: 'var(--deep-navy)', cursor: 'pointer' }}
            >
              <X size={32} />
            </button>

            {navLinks.map((link, i) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="nav-item" 
                style={{ fontSize: '1.2rem', color: 'var(--deep-navy)', fontWeight: 700 }} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '10px 0' }} />
            <Link href="/courses" className="btn btn-gold" style={{ justifyContent: 'center', background: 'var(--energy-yellow)', color: 'var(--deep-navy)' }} onClick={() => setIsMobileMenuOpen(false)}>
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 1024px) {
          .nav-links, .nav-actions { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}


