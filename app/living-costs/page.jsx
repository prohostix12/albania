"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Home,
  Utensils,
  Bus,
  Wifi,
  ShoppingBag,
  Heart,
  BookOpen,
  Coffee,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Lightbulb,
  Bike,
  Music,
  Smartphone,
  BookOpenCheck,
  PartyPopper,
  HeartPulse,
  Calculator,
  Landmark,
  Sailboat,
  Mountain,
  Waves,
  Globe2,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import './living-costs.css';

const fadeIn = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const costCards = [
  {
    Icon: Home, color: '#f0fdf4',
    label: 'Accommodation',
    range: '\u20b98k \u2013 \u20b918k',
    suffix: '/ month',
    note: 'Student hostels, shared flats, or private rooms near campus.',
  },
  {
    Icon: Utensils, color: '#fffbeb',
    label: 'Food & Groceries',
    range: '\u20b96k \u2013 \u20b912k',
    suffix: '/ month',
    note: 'Affordable local markets, student canteens, and home-cooked meals.',
  },
  {
    Icon: Bus, color: '#eff6ff',
    label: 'Transport',
    range: '\u20b91.5k \u2013 \u20b93k',
    suffix: '/ month',
    note: 'City buses, trams, and student-discounted monthly passes.',
  },
  {
    Icon: Smartphone, color: '#fdf4ff',
    label: 'Phone & Internet',
    range: '\u20b9500 \u2013 \u20b91.5k',
    suffix: '/ month',
    note: 'Local SIM plans with 4G data and campus WiFi included.',
  },
  {
    Icon: BookOpenCheck, color: '#f0fdf4',
    label: 'Books & Supplies',
    range: '\u20b92k \u2013 \u20b95k',
    suffix: '/ semester',
    note: 'Most resources available digitally. Library access is free.',
  },
  {
    Icon: PartyPopper, color: '#fef2f2',
    label: 'Entertainment',
    range: '\u20b92k \u2013 \u20b95k',
    suffix: '/ month',
    note: 'Caf\u00e9s, cultural events, trips, and student discounts everywhere.',
  },
  {
    Icon: HeartPulse, color: '#fff7ed',
    label: 'Health & Insurance',
    range: '\u20b91k \u2013 \u20b92.5k',
    suffix: '/ month',
    note: 'Basic student health insurance covers most medical expenses.',
  },
  {
    Icon: Calculator, color: '#f8fafc',
    label: 'Total Monthly Budget',
    range: '\u20b925k \u2013 \u20b945k',
    suffix: '/ month',
    note: 'Comfortable, mid-range student lifestyle in Albania.',
  },
];

const comparisonData = [
  { category: 'Tuition Fees (Bachelor)', albania: '€1,500 – €3,500/yr', uk: '€15,000+/yr', germany: '€500 – €3,000/yr', india: '₹1L – ₹3L/yr' },
  { category: 'Monthly Rent (shared)', albania: '€100 – €220', uk: '€700 – €1,200', germany: '€350 – €700', india: '₹5k – ₹15k' },
  { category: 'Monthly Food', albania: '€80 – €150', uk: '€250 – €400', germany: '€200 – €350', india: '₹4k – ₹10k' },
  { category: 'Transport (monthly)', albania: '€15 – €30', uk: '€80 – €150', germany: '€50 – €90', india: '₹500 – ₹2k' },
  { category: 'Total Monthly Living', albania: '€250 – €450', uk: '€1,200 – €2,000', germany: '€700 – €1,200', india: '₹15k – ₹35k' },
  { category: 'EU Work Rights After Study', albania: 'Yes (post-degree)', uk: '2-yr Graduate Visa', germany: '18-month job search', india: 'N/A' },
];

const cities = [
  {
    Icon: Landmark, name: 'Tirana', costLabel: 'Monthly cost',
    cost: '\u20ac280', suffix: '\u2013 \u20ac420/mo',
    amenities: ['Capital city, vibrant nightlife', 'Best transport links', 'Most international students', 'Wide range of accommodation'],
  },
  {
    Icon: Sailboat, name: 'Durr\u00ebs', costLabel: 'Monthly cost',
    cost: '\u20ac220', suffix: '\u2013 \u20ac360/mo',
    amenities: ['Beachside city, relaxed vibe', '30 min from Tirana', 'Lower rent prices', 'Great seafood & local cuisine'],
  },
  {
    Icon: Mountain, name: 'Shkod\u00ebr', costLabel: 'Monthly cost',
    cost: '\u20ac190', suffix: '\u2013 \u20b9310/mo',
    amenities: ['Scenic lake & mountain views', 'Very affordable rents', 'Rich cultural heritage', 'Bike-friendly city'],
  },
  {
    Icon: Waves, name: 'Vlor\u00eb', costLabel: 'Monthly cost',
    cost: '\u20ac200', suffix: '\u2013 \u20ac330/mo',
    amenities: ['Adriatic & Ionian coast access', 'Warm, Mediterranean climate', 'Growing student community', 'Lowest cost of living'],
  },
];

const tips = [
  { icon: Home, title: 'Live in a Shared Flat', desc: 'Sharing a 2–3 bedroom apartment with classmates can cut your rent by 40–60%. Most students prefer this for both savings and social life.' },
  { icon: Utensils, title: 'Cook at Home', desc: 'Albanian supermarkets are cheap. Cooking at home for just 5 days a week can save you ₹2,000–4,000 per month compared to eating out daily.' },
  { icon: Bus, title: 'Use Student Transit Pass', desc: "Monthly student bus/tram passes cost as little as €15. Albania's cities are compact — many students also walk or cycle." },
  { icon: Lightbulb, title: 'Use Campus Facilities', desc: 'All universities provide free library access, WiFi, and sports facilities. Maximize these to cut down on personal expenses.' },
  { icon: ShoppingBag, title: 'Shop at Local Markets', desc: "Albania's fresh food bazaars (tregu) offer vegetables, fruits, and dairy at a fraction of supermarket prices." },
  { icon: Wifi, title: 'Bundle SIM + Internet', desc: 'Local telecom providers (Vodafone Albania, ONE Telecom) offer student bundles with 10GB+ data for under ₹500/month.' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LivingCostsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="noise-bg">
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="living-hero">
        <div className="living-hero-overlay" />
        <div className="living-hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="living-hero-tag">Living & Costs</p>
          </motion.div>

          <div className="reveal-text">
            <motion.h1
              className="living-hero-title reveal-text-content"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Study in Europe, <span>Save Like Never Before</span>
            </motion.h1>
          </div>

          <motion.p
            className="living-hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Albania offers one of Europe's most affordable student lifestyles —
            without compromising on quality, culture, or career opportunities.
          </motion.p>

          <motion.div
            className="living-hero-pills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            {[
              { icon: <DollarSign size={14} />, text: '₹25k – ₹45k / month total' },
              { icon: <CheckCircle2 size={14} />, text: 'ECTS-accredited degrees' },
              { icon: <Heart size={14} />, text: 'Safe, welcoming country' },
            ].map((pill) => (
              <span key={pill.text} className="living-hero-pill">
                {pill.icon} {pill.text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Cost Breakdown ───────────────────────────────────── */}
      <section className="living-section bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="l-section-label">Monthly Budget</span>
            <h2 className="l-heading">
              What You'll <span>Actually Spend</span>
            </h2>
            <p className="l-sub">
              A transparent, real-world breakdown of student expenses in Albania.
            </p>
          </motion.div>

          <motion.div
            className="cost-cards-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {costCards.map((c) => (
              <motion.div key={c.label} className="cost-card glass-card-premium" variants={fadeIn}
                whileHover={{ y: -8 }}
              >
                <div className="cost-card-icon" style={{ background: c.color }}>
                  <c.Icon size={24} />
                </div>
                <div className="cost-card-label">{c.label}</div>
                <div className="cost-card-range">
                  {c.range} <span>{c.suffix}</span>
                </div>
                <p className="cost-card-note" style={{ color: 'rgba(255,255,255,0.6)' }}>{c.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Comparison Table ─────────────────────────────────── */}
      <section className="living-section bg-light">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="l-section-label gold">Cost Comparison</span>
            <h2 className="l-heading">
              Albania vs <span className="gold">Other Study Destinations</span>
            </h2>
            <p className="l-sub">
              See how Albania stacks up against the UK, Germany, and studying at home in India.
            </p>
          </motion.div>

          <motion.div
            className="comparison-table-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th className="highlight-col">Albania</th>
                  <th>UK</th>
                  <th>Germany</th>
                  <th>India</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.category}>
                    <td>{row.category}</td>
                    <td className="highlight-col">{row.albania}</td>
                    <td>{row.uk}</td>
                    <td>{row.germany}</td>
                    <td>{row.india}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ─── City Guide ───────────────────────────────────────── */}
      <section className="living-section bg-dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="l-section-label">City Guide</span>
            <h2 className="l-heading light">
              Choose Your <span>Perfect City</span>
            </h2>
            <p className="l-sub light">
              Albania has several student-friendly cities, each with its own character and cost profile.
            </p>
          </motion.div>

          <motion.div
            className="cities-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {cities.map((city) => (
              <motion.div key={city.name} className="city-card glass-card-premium" variants={fadeIn}
                whileHover={{ y: -8 }}
              >
                <div className="city-flag">
                  <city.Icon size={32} />
                </div>
                <div className="city-name">{city.name}</div>
                <div className="city-cost-label">{city.costLabel}</div>
                <div className="city-cost-value">
                  {city.cost} <span>{city.suffix}</span>
                </div>
                <div className="city-amenities">
                  {city.amenities.map((a) => (
                    <div key={a} className="city-amenity" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--secondary-blue)' }} /> {a}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Money-Saving Tips ────────────────────────────────── */}
      <section className="living-section bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="l-section-label">Smart Tips</span>
            <h2 className="l-heading">
              Student <span>Money-Saving Tips</span>
            </h2>
            <p className="l-sub">
              Small habits that can save you thousands every semester.
            </p>
          </motion.div>

          <motion.div
            className="tips-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {tips.map((tip) => (
              <motion.div key={tip.title} className="tip-card glass-card-premium" variants={fadeIn}
                whileHover={{ x: 10 }}
              >
                <div className="tip-icon">
                  <tip.icon size={22} />
                </div>
                <div className="tip-body">
                  <h4 style={{ color: 'white' }}>{tip.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)' }}>{tip.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="living-cta">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Plan Your Budget, Plan Your Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Talk to our counsellors for a personalized cost estimate based on your city and lifestyle.
          </motion.p>
          <motion.div
            className="living-cta-buttons"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="btn btn-primary" style={{ background: '#fff', color: '#111' }}>
              Get Free Estimate <ArrowRight size={16} />
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
