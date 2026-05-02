"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  Search,
  Building2,
  Globe,
  Award,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const universities = [
  {
    name: "Canadian Institute of Technology",
    desc: "A premier technology-focused institution offering Canadian-standard education in IT, Engineering, and Business Management.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    stats: { students: "1,200+", programs: "15+", placement: "92%" },
    type: "Tech & Management",
    location: "Tirana, Albania"
  },
  {
    name: "Epoka University",
    desc: "Albania's leading international institution, renowned for its English-taught programs in Architecture and Engineering.",
    img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    stats: { students: "2,000+", programs: "25+", placement: "94%" },
    type: "International Research",
    location: "Tirana, Albania"
  },
  {
    name: "Mediterranean University",
    desc: "Strategically focused on global economics, social sciences, and international relations with strong EU pathways.",
    img: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=800&q=80",
    stats: { students: "2,500+", programs: "20+", placement: "88%" },
    type: "Social Sciences",
    location: "Tirana, Albania"
  },
  {
    name: "Western Balkans University",
    desc: "A modern institution specializing in advanced life sciences, medical technology, and global health standards.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    stats: { students: "800+", programs: "12+", placement: "95%" },
    type: "Medical & Sciences",
    location: "Tirana, Albania"
  },
  {
    name: "Luaras University",
    desc: "One of Albania's most prestigious institutions, distinguished for legal studies and economic excellence.",
    img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    stats: { students: "1,500+", programs: "10+", placement: "90%" },
    type: "Law & Business",
    location: "Tirana, Albania"
  }
];

export default function UniversitiesPage() {
  const [search, setSearch] = useState("");

  const filteredUnis = universities.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase()) || 
    u.type.toLowerCase().includes(search.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-white)' }}>
      {/* ── Subpage Hero ── */}
      <section className="section" style={{ paddingTop: '200px', paddingBottom: '100px', background: 'var(--midnight)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--midnight) 20%, transparent 100%)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', borderRadius: '100px', background: 'rgba(249, 200, 14, 0.1)', border: '1px solid var(--gold-soft)', color: 'var(--gold)', fontWeight: 800, marginBottom: '24px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            <Building2 size={18} />
            <span>Centers of Excellence</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title"
            style={{ marginBottom: '24px', color: 'white' }}
          >
            Elite <span className="gold-text">Academic</span> Partners.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Explore our network of ECTS-accredited universities that maintain the highest European standards for research, teaching, and career readiness.
          </motion.p>
        </div>
      </section>

      {/* ── Search & Filter ── */}
      <section style={{ marginTop: '-44px', position: 'relative', zIndex: 20 }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ 
              background: 'white', 
              padding: '12px 32px', 
              borderRadius: '100px', 
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
              <Search size={22} color="var(--gold)" />
              <input 
                type="text" 
                placeholder="Search institutions by name or faculty..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1.1rem', fontWeight: 500, color: 'var(--midnight)' }}
              />
            </div>
            <div style={{ height: '32px', width: '1px', background: 'rgba(0,0,0,0.1)' }} />
            <div style={{ fontWeight: 800, color: 'var(--midnight)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>
              {filteredUnis.length} Partners
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Universities Grid ── */}
      <section className="section">
        <div className="container">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '32px' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredUnis.map((uni, i) => (
                <motion.div 
                  key={uni.name} 
                  variants={itemVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="premium-card"
                  whileHover={{ y: -10, borderColor: 'var(--gold)', boxShadow: 'var(--shadow-lg)' }}
                  style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <div style={{ height: '220px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                    <img src={uni.img} alt={uni.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                      <div style={{ background: 'var(--gold)', padding: '6px 14px', borderRadius: '100px', fontWeight: 800, fontSize: '0.65rem', color: 'var(--midnight)', boxShadow: 'var(--shadow-gold)', textTransform: 'uppercase' }}>
                        {uni.type}
                      </div>
                    </div>
                    <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(10, 25, 47, 0.8)', padding: '6px 12px', borderRadius: '8px', color: 'white', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(5px)' }}>
                      <MapPin size={14} color="var(--gold)" /> {uni.location}
                    </div>
                  </div>
                  
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--midnight)', fontWeight: 800 }}>{uni.name}</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6, fontSize: '0.95rem', flex: 1 }}>{uni.desc}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', padding: '24px 0', borderTop: '1px solid rgba(0,0,0,0.05)', marginBottom: '24px' }}>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--gold-dark)' }}>{uni.stats.students}</div>
                        <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Students</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--gold-dark)' }}>{uni.stats.programs}</div>
                        <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Programs</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--gold-dark)' }}>{uni.stats.placement}</div>
                        <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Placement</div>
                      </div>
                    </div>

                    <Link href="/courses" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Programs <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


