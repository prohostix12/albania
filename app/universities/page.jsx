"use client";

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  Search,
  Building2,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const universities = [
  {
    name: "Canadian Institute of Technology",
    desc: "A premier technology-focused institution offering Canadian-standard education in IT, Engineering, and Business Management. Strategically aligned with North American academic frameworks.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    stats: { students: "1,200+", programs: "15+", placement: "92%" },
    type: "Tech & Management",
    location: "Tirana, Albania"
  },
  {
    name: "Western Balkans University",
    desc: "A modern, innovation-driven university specializing in advanced life sciences, medical technology, and health informatics. Focused on R&D and global healthcare standards.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    stats: { students: "800+", programs: "12+", placement: "95%" },
    type: "Medical & Sciences",
    location: "Tirana, Albania"
  },
  {
    name: "Mediterranean University",
    desc: "Focusing on global economics, social sciences, and international relations. Renowned for its excellence in research and strong EU integration pathways.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    stats: { students: "2,500+", programs: "20+", placement: "88%" },
    type: "Social Sciences",
    location: "Tirana, Albania"
  },
  {
    name: "Luarasi University",
    desc: "One of Albania's most prestigious private institutions, distinguished for its legal studies, economic excellence, and high-profile alumni network.",
    img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    stats: { students: "1,500+", programs: "10+", placement: "90%" },
    type: "Law & Business",
    location: "Tirana, Albania"
  }
];

export default function UniversitiesPage() {
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
          <div style={{ 
            background: 'white', 
            padding: '24px 48px', 
            borderRadius: '32px', 
            boxShadow: 'var(--shadow-premium)',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
              <Search size={24} color="var(--gold)" />
              <input 
                type="text" 
                placeholder="Search institutions by name or faculty..." 
                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1.2rem', fontWeight: 500, color: 'var(--midnight)' }}
              />
            </div>
            <div style={{ height: '40px', width: '1px', background: 'rgba(0,0,0,0.1)' }} />
            <div style={{ fontWeight: 800, color: 'var(--midnight)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
              Showing {universities.length} Institutions
            </div>
          </div>
        </div>
      </section>

      {/* ── Universities Grid ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))', gap: '48px' }}>
            {universities.map((uni, i) => (
              <motion.div 
                key={i} 
                className="premium-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '0', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: '320px', width: '100%', position: 'relative' }}>
                  <img src={uni.img} alt={uni.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
                    <div style={{ background: 'var(--gold)', padding: '10px 20px', borderRadius: '100px', fontWeight: 800, fontSize: '0.75rem', color: 'var(--midnight)', boxShadow: 'var(--shadow-gold)', textTransform: 'uppercase' }}>
                      {uni.type}
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: 'rgba(10, 25, 47, 0.8)', padding: '8px 16px', borderRadius: '8px', color: 'white', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(5px)' }}>
                    <MapPin size={16} color="var(--gold)" /> {uni.location}
                  </div>
                </div>
                
                <div style={{ padding: '48px' }}>
                  <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--midnight)' }}>{uni.name}</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.8, fontSize: '1.05rem' }}>{uni.desc}</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', padding: '32px 0', borderTop: '1px solid rgba(0,0,0,0.05)', marginBottom: '40px' }}>
                    <div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--gold-dark)' }}>{uni.stats.students}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Global Scholars</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--gold-dark)' }}>{uni.stats.programs}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>ECTS Programs</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--gold-dark)' }}>{uni.stats.placement}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Global Placement</div>
                    </div>
                  </div>

                  <Link href="/courses" className="btn btn-primary" style={{ width: '100%' }}>
                    Explore Catalog <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


