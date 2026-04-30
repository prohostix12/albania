"use client";

import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, MessageCircle, ArrowRight, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <GraduationCap size={20} />
                </div>
                <span>Study<strong>Albania</strong></span>
              </div>
              <p className="footer-desc">
                Your trusted gateway to affordable, world-class European education. We connect
                ambitious students with top Albanian universities for ECTS-accredited degrees
                and EU career pathways.
              </p>
              <div className="social-links">
                {/* Facebook */}
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                {/* YouTube */}
                <a href="#" className="social-link" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
                {/* Twitter / X */}
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Explore</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/universities">Universities</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/placements">Placements</Link></li>
                <li><Link href="/living-costs">Living &amp; Costs</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-col">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="#">Scholarships</Link></li>
                <li><Link href="#">Visa Guide</Link></li>
                <li><Link href="#">FAQs</Link></li>
              </ul>
            </div>

            {/* Universities */}
            <div className="footer-col">
              <h4 className="footer-heading">Universities</h4>
              <ul className="footer-links">
                <li><Link href="/universities">Canadian Institute of Tech</Link></li>
                <li><Link href="/universities">Epoka University</Link></li>
                <li><Link href="/universities">Mediterranean University</Link></li>
                <li><Link href="/universities">Western Balkans University</Link></li>
                <li><Link href="/universities">Luarasi University</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-heading">Get in Touch</h4>
              <ul className="footer-contact-list">
                <li>
                  <MapPin size={15} />
                  <span>123 Education Hub, Connaught Place, New Delhi</span>
                </li>
                <li>
                  <Phone size={15} />
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <Mail size={15} />
                  <span>info@studyalbania.in</span>
                </li>
                <li>
                  <MessageCircle size={15} />
                  <span>WhatsApp: +91 98765 43210</span>
                </li>
              </ul>
              <a href="#" className="footer-whatsapp-btn">
                <MessageCircle size={16} />
                Chat on WhatsApp
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; {new Date().getFullYear()} StudyAlbania. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
