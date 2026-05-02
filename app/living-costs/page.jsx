"use client";

import { motion } from 'framer-motion';
import { 
  Euro, 
  Home, 
  Utensils, 
  Bus, 
  Wifi, 
  CheckCircle,
  Sparkles,
  TrendingDown,
  Wallet,
  Coffee,
  ShoppingBag,
  Zap,
  Landmark,
  Sailboat,
  Mountain,
  Waves,
  Lightbulb
} from 'lucide-react';

const costItems = [
  { icon: Home, label: "Premium Student Housing", range: "€200 - €350", desc: "Modern apartments in prime Tirana districts, fully furnished." },
  { icon: Utensils, label: "Fine Dining & Groceries", range: "€150 - €200", desc: "Access to fresh Mediterranean produce and diverse cuisines." },
  { icon: Bus, label: "Urban Transport", range: "€20 - €30", desc: "Comprehensive city-wide bus networks and affordable ride-sharing." },
  { icon: Wifi, label: "Digital Connectivity", range: "€15 - €25", desc: "High-speed fiber optics and unlimited 5G mobile data." },
];

const cities = [
  {
    name: "Tirana",
    icon: Landmark,
    priceRange: "€280 - €420/mo",
    basePrice: "€280",
    features: [
      "Capital city, vibrant nightlife",
      "Best transport links",
      "Most international students",
      "Wide range of accommodation"
    ]
  },
  {
    name: "Durrës",
    icon: Sailboat,
    priceRange: "€220 - €360/mo",
    basePrice: "€220",
    features: [
      "Beachside city, relaxed vibe",
      "30 min from Tirana",
      "Lower rent prices",
      "Great seafood & local cuisine"
    ]
  },
  {
    name: "Shkodër",
    icon: Mountain,
    priceRange: "€190 - €310/mo",
    basePrice: "€190",
    features: [
      "Scenic lake & mountain views",
      "Very affordable rents",
      "Rich cultural heritage",
      "Bike-friendly city"
    ]
  },
  {
    name: "Vlorë",
    icon: Waves,
    priceRange: "€200 - €330/mo",
    basePrice: "€200",
    features: [
      "Adriatic & Ionian coast access",
      "Warm, Mediterranean climate",
      "Growing student community",
      "Lowest cost of living"
    ]
  }
];

const savingTips = [
  { icon: Home, title: "Live in a Shared Flat", desc: "Sharing a 2-3 bedroom apartment with classmates can cut your rent by 40-60%. Most students prefer this for both savings and social life." },
  { icon: Utensils, title: "Cook at Home", desc: "Albanian supermarkets are cheap. Cooking at home for just 5 days a week can save you ₹2,000-4,000 per month compared to eating out daily." },
  { icon: Bus, title: "Use Student Transit Pass", desc: "Monthly student bus/tram passes cost as little as €15. Albania's cities are compact — many students also walk or cycle." },
  { icon: Lightbulb, title: "Use Campus Facilities", desc: "All universities provide free library access, WIFI, and sports facilities. Maximize these to cut down on personal expenses." },
  { icon: ShoppingBag, title: "Shop at Local Markets", desc: "Albania's fresh food bazaars (tregu) offer vegetables, fruits, and dairy at a fraction of supermarket prices." },
  { icon: Wifi, title: "Bundle SIM + Internet", desc: "Local telecom providers (Vodafone Albania, ONE Telecom) offer student bundles with 10GB+ data for under ₹500/month." }
];

export default function LivingCostsPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-white)' }}>
      {/* ── Subpage Hero ── */}
      <section className="section" style={{ paddingTop: '200px', paddingBottom: '120px', background: 'var(--midnight)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--midnight) 20%, transparent 100%)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', borderRadius: '100px', background: 'rgba(249, 200, 14, 0.1)', border: '1px solid var(--gold-soft)', color: 'var(--gold)', fontWeight: 800, marginBottom: '24px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            <Wallet size={18} />
            <span>Financial Transparency</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title"
            style={{ marginBottom: '24px', color: 'white' }}
          >
            Living & <span className="gold-text">Affordability.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Experience a premium European lifestyle at a fraction of the cost. Albania offers unparalleled value for international scholars.
          </motion.p>
        </div>
      </section>

      {/* ── Comparative Section ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">The <span className="gradient-text">Economic Edge.</span></h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '40px' }}>
                Compared to traditional study destinations like the UK or Germany, Albania provides an elite standard of living with significantly lower overheads. This allows students to focus entirely on their academic performance without financial strain.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                {[
                  { label: "Tuition Advantage", desc: "Up to 60% lower than Western European private universities." },
                  { label: "Housing Value", desc: "Premium city-center housing at 1/3rd of London prices." },
                  { label: "Lifestyle Freedom", desc: "High discretionary income for travel and networking." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <TrendingDown size={24} color="var(--gold-dark)" />
                    <div>
                      <span style={{ fontWeight: 800, color: 'var(--midnight)' }}>{item.label}:</span>
                      <span style={{ color: 'var(--text-muted)', marginLeft: '8px' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="premium-card"
              style={{ background: 'var(--midnight)', color: 'white' }}
            >
              <h3 style={{ fontSize: '1.8rem', color: 'var(--gold)', marginBottom: '32px' }}>Monthly Estimates</h3>
              <div style={{ display: 'grid', gap: '24px' }}>
                {costItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <item.icon size={20} color="var(--gold-soft)" />
                      <span style={{ fontWeight: 600 }}>{item.label}</span>
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{item.range}</span>
                  </div>
                ))}
                <div style={{ marginTop: '24px', padding: '24px', background: 'rgba(249, 200, 14, 0.1)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Total Monthly Average</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--gold)' }}>€450 - €650</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── City Guide Section ── */}
      <section className="section" style={{ background: 'var(--midnight)', color: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255, 193, 7, 0.1)', color: 'var(--yellow)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '24px' }}>
              CITY GUIDE
            </div>
            <h2 className="section-title" style={{ color: 'white', fontSize: '3rem', marginBottom: '16px', textAlign: 'left' }}>
              Choose Your <span className="gold-text">Perfect City</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', textAlign: 'left' }}>
              Albania has several student-friendly cities, each with its own character and cost profile.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {cities.map((city, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  borderRadius: '24px', 
                  padding: '32px',
                  transition: 'var(--transition)'
                }}
                whileHover={{ y: -10, borderColor: 'var(--gold)', background: 'rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              >
                <city.icon size={32} color="var(--gold)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '4px', fontWeight: 700 }}>{city.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '16px' }}>Monthly cost</p>
                
                <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--gold)' }}>{city.basePrice}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{city.priceRange.replace(city.basePrice, '')}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
                  {city.features.map((feature, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle size={16} color="var(--gold)" style={{ marginTop: '4px', flexShrink: 0 }} />
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.5 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Smart Tips Section ── */}
      <section className="section" style={{ background: 'var(--bg-white)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255, 193, 7, 0.1)', color: 'var(--yellow)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '24px' }}>
              SMART TIPS
            </div>
            <h2 className="section-title" style={{ color: 'var(--midnight)', fontSize: '3rem', marginBottom: '16px' }}>
              Student <span className="gold-text">Money-Saving Tips</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
              Small habits that can save you thousands every semester.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {savingTips.map((tip, i) => (
              <motion.div 
                key={i}
                className="premium-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  padding: '32px',
                  alignItems: 'flex-start',
                  height: '100%'
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255, 193, 7, 0.1)', color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <tip.icon size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--midnight)', fontWeight: 700 }}>{tip.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{tip.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Breakdown Grid ── */}
      <section className="section" style={{ background: 'var(--bg-slate)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 className="section-title">Detailed <span className="gradient-text">Lifestyle</span> Analysis</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>We break down the costs to help you plan your academic future with precision.</p>
          </div>
          
          <div className="grid-3">
            {costItems.map((item, i) => (
              <motion.div 
                key={i} 
                className="premium-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--gold-soft)', color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                  <item.icon size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--midnight)' }}>{item.label}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>{item.desc}</p>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--midnight)' }}>{item.range} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>/ month</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
