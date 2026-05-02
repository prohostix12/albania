"use client";

import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Twitter = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="nav-logo" style={{ color: 'white', marginBottom: '32px' }}>
              <GraduationCap size={32} strokeWidth={2.5} color="var(--gold)" />
              <div>Study<span>Albania</span></div>
            </Link>
            <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.8, maxWidth: '350px' }}>
              Pioneering the future of global academic mobility. We connect ambitious scholars with elite European institutions through a seamless, high-authority admission ecosystem.
            </p>
          </div>

          <div className="footer-col">
            <h4>Global Portal</h4>
            <div className="footer-links">
              <Link href="/universities" className="footer-link">Institutional Partners</Link>
              <Link href="/courses" className="footer-link">Academic Catalog</Link>
              <Link href="/living-costs" className="footer-link">Student Lifestyle</Link>
              <Link href="/scholarships" className="footer-link">Scholarships</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Institution</h4>
            <div className="footer-links">
              <Link href="/about" className="footer-link">Our Mission</Link>
              <Link href="/contact" className="footer-link">Contact Admissions</Link>
              <Link href="#" className="footer-link">Privacy Framework</Link>
              <Link href="#" className="footer-link">Academic Terms</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Admissions Hub</h4>
            <div className="footer-links">
              <div style={{ display: 'flex', gap: '16px', color: '#94A3B8', marginBottom: '12px', alignItems: 'center' }}>
                <Mail size={18} color="var(--gold)" /> admissions@studyalbania.in
              </div>
              <div style={{ display: 'flex', gap: '16px', color: '#94A3B8', marginBottom: '12px', alignItems: 'center' }}>
                <Phone size={18} color="var(--gold)" /> +91 98765 43210
              </div>
              <div style={{ display: 'flex', gap: '16px', color: '#94A3B8', alignItems: 'center' }}>
                <MapPin size={18} color="var(--gold)" /> Diplomatic Enclave, New Delhi
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '60px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <p style={{ color: '#64748B', fontSize: '0.9rem', fontWeight: 500 }}>
            © 2024 Study Albania Portal. All rights reserved. Managed by Ajinora Global Education.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="#" className="social-icon"><Instagram size={20} /></Link>
            <Link href="#" className="social-icon"><Twitter size={20} /></Link>
            <Link href="#" className="social-icon"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


