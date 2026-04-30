"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import {
  GraduationCap,
  Globe2,
  Users,
  Award,
  Target,
  Heart,
  Shield,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  BookOpen
} from 'lucide-react';
import './about.css';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", color: "#D4A017" },
  { name: "Priya Sharma", role: "Head of Admissions", color: "#7C3AED" },
  { name: "Arjun Patel", role: "Student Counsellor", color: "#059669" },
  { name: "Sneha Reddy", role: "Visa & Immigration", color: "#DC2626" },
];

const timeline = [
  { year: "2018", title: "Founded", desc: "Started with a vision to make European education accessible to Indian students." },
  { year: "2019", title: "First Batch", desc: "Successfully placed 50+ students in Albanian universities." },
  { year: "2021", title: "5 University Partners", desc: "Expanded partnerships to cover all major institutions in Albania." },
  { year: "2023", title: "500+ Alumni", desc: "Growing alumni network across Europe with 92% placement rate." },
  { year: "2025", title: "Regional Offices", desc: "Opened offices in Delhi, Mumbai, and Bangalore for better student access." },
];

const values = [
  { icon: Target, title: "Student-First", desc: "Every decision we make puts student success at the center." },
  { icon: Shield, title: "Transparency", desc: "No hidden fees, no false promises — complete honesty at every step." },
  { icon: Heart, title: "Support", desc: "From application to graduation, we're with you throughout the journey." },
  { icon: Globe2, title: "Global Vision", desc: "We connect Indian students to world-class European opportunities." },
];

const stats = [
  { number: "500+", label: "Students Placed" },
  { number: "5", label: "Partner Universities" },
  { number: "25+", label: "Programs Offered" },
  { number: "92%", label: "Placement Rate" },
  { number: "30+", label: "Nationalities" },
  { number: "3", label: "India Offices" },
];

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="about-page noise-bg">
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="About Us" />
        </div>
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="about-hero-tag">About Us</p>
            <div className="reveal-text">
              <h1 className="about-hero-title reveal-text-content">Your Trusted Partner for <span>European Education</span></h1>
            </div>
            <p className="about-hero-subtitle">
              We bridge the gap between Indian students and world-class Albanian universities — making quality European education accessible, affordable, and achievable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        <div className="container">
          <motion.div
            className="stats-strip-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s, i) => (
              <motion.div key={i} className="stat-card" variants={fadeIn}>
                <strong>{s.number}</strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="mission-grid">
            <motion.div className="mission-content" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Our Mission</h2>
              <p className="mission-text">
                We believe every student deserves access to quality education regardless of their financial background. Albania offers EU-standard degrees at a fraction of the cost — and we make that opportunity real.
              </p>
              <p className="mission-text">
                From university selection and application support to visa assistance and post-arrival settling, we handle every step so students can focus on what matters most: their education and future.
              </p>
              <div className="mission-highlights">
                {["End-to-end admission support", "Visa & travel assistance", "Accommodation help", "Post-arrival student care"].map((item, i) => (
                  <div key={i} className="mission-highlight-item">
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="mission-image" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Our Core Values
            </motion.h2>
          </div>
          <motion.div className="values-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {values.map((v, i) => (
              <motion.div key={i} className="value-card glass-card-premium" variants={fadeIn}
                whileHover={{ y: -8 }}
              >
                <div className="value-icon"><v.icon size={28} /></div>
                <h3>{v.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Our Journey
            </motion.h2>
          </div>
          <motion.div className="timeline" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {timeline.map((t, i) => (
              <motion.div key={i} className="timeline-item" variants={fadeIn}>
                <div className="timeline-dot" />
                <div className="timeline-card glass-card-premium" style={{ border: 'none' }}>
                  <span className="timeline-year" style={{ color: 'var(--secondary-blue)' }}>{t.year}</span>
                  <h4 style={{ color: 'white' }}>{t.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)' }}>{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Meet Our Team
            </motion.h2>
            <p className="section-subtitle">Dedicated professionals guiding your education journey.</p>
          </div>
          <motion.div className="team-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {team.map((t, i) => (
              <motion.div key={i} className="team-card glass-card-premium" variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="team-avatar" style={{ background: t.color }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 style={{ color: 'white' }}>{t.name}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>{t.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.h2 className="cta-title" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 100 }}>
            Ready to Start Your Journey?
          </motion.h2>
          <motion.div className="cta-buttons" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <button className="btn btn-primary" style={{ background: '#fff', color: '#111' }}>Free Counselling</button>
            <button className="btn btn-whatsapp"><MessageCircle size={20} /> WhatsApp Us</button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
