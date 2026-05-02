"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Clock, 
  Euro, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  Filter,
  Layers,
  BookOpen,
  Award
} from 'lucide-react';
import Link from 'next/link';

const allCourses = [
  { id: 1, name: "B.Sc. Computer Engineering", university: "Canadian Institute of Technology", level: "Bachelor", duration: "3 Years", tuition: "€2,500/yr", desc: "A comprehensive curriculum covering hardware-software co-design, embedded systems, and robotics." },
  { id: 2, name: "B.Sc. Software Engineering", university: "Canadian Institute of Technology", level: "Bachelor", duration: "3 Years", tuition: "€2,500/yr", desc: "Master full-stack development, cloud architecture, and agile methodologies for the modern tech industry." },
  { id: 3, name: "M.Sc. Business Analytics", university: "Mediterranean University", level: "Master", duration: "2 Years", tuition: "€3,500/yr", desc: "Leverage big data and AI to drive strategic business growth and operational excellence." },
  { id: 4, name: "M.Sc. Structural Engineering", university: "Epoka University", level: "Master", duration: "2 Years", tuition: "€4,000/yr", desc: "Advanced specialization in computational mechanics, seismic design, and sustainable construction." },
  { id: 5, name: "B.A. Digital Marketing", university: "Luarasi University", level: "Bachelor", duration: "3 Years", tuition: "€1,800/yr", desc: "Strategic communication, consumer psychology, and AI-driven growth marketing strategies." },
  { id: 6, name: "LL.B. International Law", university: "Luarasi University", level: "Bachelor", duration: "3 Years", tuition: "€2,000/yr", desc: "Comprehensive study of global legal systems, human rights, and corporate law frameworks." },
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [activeLevel, setActiveLevel] = useState("All Levels");

  const filteredCourses = allCourses.filter(c => 
    (activeLevel === "All Levels" || c.level === activeLevel) &&
    (c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.university.toLowerCase().includes(search.toLowerCase()))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-white)' }}>
      {/* ── Subpage Hero ── */}
      <section className="section" style={{ paddingTop: '200px', paddingBottom: '120px', background: 'var(--midnight)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--midnight) 20%, transparent 100%)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', borderRadius: '100px', background: 'rgba(249, 200, 14, 0.1)', border: '1px solid var(--gold-soft)', color: 'var(--gold)', fontWeight: 800, marginBottom: '24px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            <BookOpen size={18} />
            <span>Academic Catalog 2024-25</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title"
            style={{ marginBottom: '24px', color: 'white' }}
          >
            Global <span className="gold-text">Degree</span> Programs.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Choose from a diverse range of English-taught programs designed for international excellence and career mobility.
          </motion.p>
        </div>
      </section>

      {/* ── Search Bar ── */}
      <section style={{ marginTop: '-44px', position: 'relative', zIndex: 20 }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ 
              background: 'white', 
              padding: '12px', 
              borderRadius: '100px', 
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingLeft: '32px', flex: 1 }}>
              <Search size={22} color="var(--gold)" />
              <input 
                type="text" 
                placeholder="Search by program name, field of study, or university..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1.2rem', fontWeight: 500, color: 'var(--midnight)' }}
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary" 
              style={{ padding: '18px 48px' }}
            >
              Search Catalog
            </motion.button>
          </motion.div>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
            {['All Levels', 'Bachelor', 'Master', 'PhD', 'Short Courses'].map((tag, i) => (
              <motion.button 
                key={tag}
                onClick={() => setActiveLevel(tag)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  padding: '8px 24px', 
                  borderRadius: '100px', 
                  background: activeLevel === tag ? 'var(--midnight)' : 'white', 
                  color: activeLevel === tag ? 'white' : 'var(--midnight)', 
                  border: '1px solid rgba(0,0,0,0.05)', 
                  fontWeight: 700, 
                  fontSize: '0.9rem', 
                  cursor: 'pointer', 
                  transition: '0.3s',
                  boxShadow: activeLevel === tag ? '0 4px 15px rgba(13, 27, 61, 0.2)' : 'none'
                }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses Grid ── */}
      <section className="section">
        <div className="container">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '40px' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => (
                <motion.div 
                  key={course.id} 
                  variants={itemVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="premium-card"
                  whileHover={{ y: -10, borderColor: 'var(--gold)', boxShadow: 'var(--shadow-lg)' }}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <div style={{ background: 'var(--gold-soft)', color: 'var(--gold-dark)', padding: '8px 18px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 800, border: '1px solid var(--gold-soft)', textTransform: 'uppercase' }}>
                      {course.level}
                    </div>
                    <div style={{ color: 'var(--midnight)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 800 }}>
                      <Euro size={18} color="var(--gold-dark)" /> {course.tuition}
                    </div>
                  </div>
                  
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', lineHeight: 1.2, color: 'var(--midnight)' }}>{course.name}</h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1rem', fontWeight: 600 }}>
                    <GraduationCap size={20} color="var(--gold)" />
                    {course.university}
                  </div>
                  
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '40px', flex: 1 }}>
                    {course.desc}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--midnight)', fontWeight: 800 }}>
                      <Clock size={18} color="var(--gold)" />
                      {course.duration}
                    </div>
                    <Link href="/contact" style={{ color: 'var(--midnight)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem' }}>
                      Apply for Intake <ArrowRight size={20} color="var(--gold)" />
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


