"use client";

import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Globe2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Building2,
  MapPin,
  Star,
  Users,
  Monitor,
  Cpu,
  BarChart3,
  Settings,
  Smartphone,
  Wrench,
  HeartPulse,
  Shield,
  Database,
  Leaf,
  Landmark,
} from 'lucide-react';
import Link from 'next/link';
import './placements.css';

const fadeIn = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const companies = [
  { name: 'Deloitte', sector: 'Consulting', Icon: Landmark, color: '#dbeafe' },
  { name: 'Accenture', sector: 'IT Services', Icon: Monitor, color: '#f0fdf4' },
  { name: 'Ernst & Young', sector: 'Finance', Icon: BarChart3, color: '#fffbeb' },
  { name: 'IBM', sector: 'Technology', Icon: Cpu, color: '#ede9fe' },
  { name: 'Siemens', sector: 'Engineering', Icon: Settings, color: '#fef3c7' },
  { name: 'Vodafone', sector: 'Telecom', Icon: Smartphone, color: '#fce7f3' },
  { name: 'PwC', sector: 'Consulting', Icon: TrendingUp, color: '#e0f2fe' },
  { name: 'Bosch', sector: 'Engineering', Icon: Wrench, color: '#f0fdf4' },
  { name: 'Bayer', sector: 'Healthcare', Icon: HeartPulse, color: '#fef2f2' },
  { name: 'Allianz', sector: 'Insurance', Icon: Shield, color: '#fffbeb' },
  { name: 'SAP', sector: 'Software', Icon: Database, color: '#ede9fe' },
  { name: 'Nestlé', sector: 'FMCG', Icon: Leaf, color: '#f0fdf4' },
];

const steps = [
  { title: 'Profile Building', desc: 'We polish your CV, LinkedIn, and portfolio to European standards.' },
  { title: 'Skill Assessment', desc: 'Identify strengths and close gaps through targeted workshops.' },
  { title: 'Interview Prep', desc: 'Mock interviews, aptitude training, and HR coaching by experts.' },
  { title: 'Job Matching', desc: 'Connect you directly with our 100+ hiring partners in Europe.' },
  { title: 'Visa & Relocation', desc: 'Full support for work permits and EU relocation paperwork.' },
  { title: 'Offer & Onboarding', desc: 'Salary negotiation guidance and smooth transition into your new role.' },
];

const stories = [
  {
    name: 'Arjun Mehta',
    from: 'Mumbai, India',
    degree: 'B.Sc. Computer Engineering — Canadian Institute of Technology',
    role: 'Software Engineer @ Accenture, Germany',
    quote: 'The placement cell was exceptional. Within 3 months of graduating, I had two EU job offers on the table.',
    salary: '€42,000 / year',
    initial: 'AM',
    color: '#4F46E5',
  },
  {
    name: 'Priya Sharma',
    from: 'Delhi, India',
    degree: 'MBA — Mediterranean University',
    role: 'Business Analyst @ PwC, Austria',
    quote: "AJINORA's network made the impossible possible. I never thought I'd be working in Vienna right after my Master's.",
    salary: '€48,000 / year',
    initial: 'PS',
    color: '#059669',
  },
  {
    name: 'Rahul Verma',
    from: 'Bangalore, India',
    degree: 'B.Sc. Civil Engineering — Epoka University',
    role: 'Structural Engineer @ Siemens, Germany',
    quote: 'The ECTS credits were a game-changer. European employers immediately recognized my Albanian degree.',
    salary: '€39,000 / year',
    initial: 'RV',
    color: '#D97706',
  },
  {
    name: 'Sneha Patel',
    from: 'Ahmedabad, India',
    degree: 'M.Sc. Data Science — Western Balkans University',
    role: 'Data Scientist @ IBM, Netherlands',
    quote: 'The mock interview sessions were incredibly realistic. I walked into the IBM interview with full confidence.',
    salary: '€55,000 / year',
    initial: 'SP',
    color: '#DB2777',
  },
  {
    name: 'Karan Joshi',
    from: 'Pune, India',
    degree: 'LL.B. Law — Luarasi University',
    role: 'Legal Associate @ Deloitte, Italy',
    quote: 'A European law degree from Albania gave me access to firms I could never have reached otherwise.',
    salary: '€36,000 / year',
    initial: 'KJ',
    color: '#0891B2',
  },
  {
    name: 'Aisha Nair',
    from: 'Kochi, India',
    degree: 'B.Sc. Architecture — Epoka University',
    role: 'Junior Architect @ Bosch, Switzerland',
    quote: "The career workshops transformed how I presented myself. I'm now living my dream in Switzerland.",
    salary: '€44,000 / year',
    initial: 'AN',
    color: '#7C3AED',
  },
];

const destinations = [
  { code: 'DE', country: 'Germany', jobs: '2,400+ openings' },
  { code: 'AT', country: 'Austria', jobs: '1,100+ openings' },
  { code: 'IT', country: 'Italy', jobs: '980+ openings' },
  { code: 'NL', country: 'Netherlands', jobs: '1,600+ openings' },
  { code: 'CH', country: 'Switzerland', jobs: '870+ openings' },
  { code: 'FR', country: 'France', jobs: '1,200+ openings' },
  { code: 'BE', country: 'Belgium', jobs: '740+ openings' },
  { code: 'CZ', country: 'Czech Rep.', jobs: '620+ openings' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PlacementsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="noise-bg">
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="placements-hero">
        <div className="placements-hero-overlay" />
        <div className="placements-hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="placements-hero-tag">Career & Placements</p>
          </motion.div>

          <div className="reveal-text">
            <motion.h1
              className="placements-hero-title reveal-text-content"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Your Degree, Your <span>European Career</span>
            </motion.h1>
          </div>

          <motion.p
            className="placements-hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            We don&apos;t just help you graduate — we help you land. From CV building to offer letters,
            our end-to-end placement support connects you to top employers across Europe.
          </motion.p>

          <motion.div
            className="placements-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {[
              { number: '92%', label: 'Placement Rate' },
              { number: '100+', label: 'Hiring Partners' },
              { number: '€40k', label: 'Avg. Starting Salary' },
              { number: '18', label: 'EU Countries' },
            ].map((s) => (
              <div key={s.label} className="ph-stat">
                <span className="ph-stat-number">{s.number}</span>
                <span className="ph-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Hiring Partners ──────────────────────────────────── */}
      <section className="placements-section bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="section-label">Hiring Partners</span>
            <h2 className="section-heading">
              Companies That <span>Hire Our Graduates</span>
            </h2>
            <p className="section-sub">
              Our alumni are working at top multinational firms across Europe and beyond.
            </p>
          </motion.div>

          <motion.div
            className="companies-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {companies.map((c) => (
              <motion.div key={c.name} className="company-card glass-card-premium" variants={fadeIn}
                whileHover={{ y: -6 }}
              >
                <div className="company-icon" style={{ background: c.color }}>
                  <c.Icon size={24} />
                </div>
                <span className="company-name">{c.name}</span>
                <span className="company-sector">{c.sector}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Placement Process ────────────────────────────────── */}
      <section className="placements-section bg-dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="section-label">Our Process</span>
            <h2 className="section-heading light">
              How We Get You <span>Placed</span>
            </h2>
            <p className="section-sub light">
              A structured, 6-step journey from graduate to employed professional in Europe.
            </p>
          </motion.div>

          <motion.div
            className="process-steps"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {steps.map((step, i) => (
              <motion.div key={step.title} className="process-step glass-card-premium" variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="process-step-number">{i + 1}</div>
                <h4 style={{ color: 'white' }}>{step.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Success Stories ──────────────────────────────────── */}
      <section className="placements-section bg-light">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="section-label">Success Stories</span>
            <h2 className="section-heading">
              Real Students, <span>Real Jobs</span>
            </h2>
            <p className="section-sub">
              Hear from our graduates who are now thriving in careers across Europe.
            </p>
          </motion.div>

          <motion.div
            className="stories-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {stories.map((s) => (
              <motion.div key={s.name} className="story-card glass-card-premium" variants={fadeIn}
                whileHover={{ y: -8 }}
              >
                <div className="story-header">
                  <div className="story-avatar" style={{ background: s.color }}>
                    {s.initial}
                  </div>
                  <div className="story-info">
                    <h4 style={{ color: 'white' }}>{s.name}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}><MapPin size={12} style={{ display: 'inline', marginRight: 3 }} />{s.from}</p>
                  </div>
                </div>
                <div className="story-role" style={{ color: 'var(--secondary-blue)' }}>
                  <Briefcase size={13} />
                  {s.role}
                </div>
                <p className="story-quote" style={{ color: 'rgba(255,255,255,0.8)' }}>"{s.quote}"</p>
                <div className="story-salary">
                  <span className="story-salary-label" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <GraduationCap size={12} style={{ display: 'inline', marginRight: 4 }} />
                    {s.degree}
                  </span>
                </div>
                <div style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-end' }}>
                  <span className="story-salary-value" style={{ color: 'var(--secondary-blue)' }}>{s.salary}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Job Destinations ─────────────────────────────────── */}
      <section className="placements-section bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="section-label">Job Destinations</span>
            <h2 className="section-heading">
              Where Our Graduates <span>Work</span>
            </h2>
            <p className="section-sub">
              Our network spans 18 European countries, giving you access to thousands of live openings.
            </p>
          </motion.div>

          <motion.div
            className="destinations-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {destinations.map((d) => (
              <motion.div key={d.country} className="destination-card glass-card-premium" variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="destination-flag">
                  <Globe2 size={28} />
                  <span className="destination-code">{d.code}</span>
                </div>
                <div className="destination-country">{d.country}</div>
                <div className="destination-jobs">{d.jobs}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="placement-cta">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Ready to Launch Your European Career?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Talk to our placement experts today — free, no-obligation counselling session.
          </motion.p>
          <motion.div
            className="placement-cta-buttons"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="btn btn-primary" style={{ background: '#fff', color: '#111' }}>
              Book Free Session <ArrowRight size={16} />
            </Link>
            <button className="btn btn-whatsapp">
              <MessageCircle size={18} /> WhatsApp Us
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
