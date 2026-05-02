"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  TrendingUp, 
  Globe, 
  Users, 
  CheckCircle2,
  Building2,
  ArrowRight,
  Star,
  Sparkles,
  Award,
  BarChart3,
  Cloud,
  Music,
  Monitor,
  Smartphone,
  Server,
  ShoppingCart
} from 'lucide-react';

const stats = [
  { icon: BarChart3, label: "Placement Rate", value: "94%" },
  { icon: Award, label: "Average Salary", value: "€32k" },
  { icon: Building2, label: "Partner Companies", value: "150+" },
  { icon: Users, label: "Global Alumni", value: "5k+" },
];

const stories = [
  { name: "Sarah Chen", role: "Software Engineer at Google EU", text: "Studying in Albania gave me the technical foundation and the EU networking opportunities I needed to land my dream job.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150" },
  { name: "Markus Weber", role: "Senior Analyst at Deloitte", text: "The MBA program at CIT was world-class. The direct connections to European firms were the key to my rapid career growth.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150" },
  { name: "Elena Rossi", role: "UX Designer at Spotify", text: "Albania is a hidden gem for tech education. Affordable, accredited, and highly respected by recruiters across the continent.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150" },
];

export default function PlacementsPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-white)' }}>
      {/* ── Subpage Hero ── */}
      <section className="section" style={{ paddingTop: '200px', paddingBottom: '120px', background: 'var(--midnight)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--midnight) 20%, transparent 100%)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', borderRadius: '100px', background: 'rgba(249, 200, 14, 0.1)', border: '1px solid var(--gold-soft)', color: 'var(--gold)', fontWeight: 800, marginBottom: '24px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            <Briefcase size={18} />
            <span>Career Excellence</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title"
            style={{ marginBottom: '24px', color: 'white' }}
          >
            Your Bridge to <span className="gold-text">Global</span> Firms.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}
          >
            We don't just provide education; we launch global careers with direct pathways to the world's leading firms.
          </motion.p>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="section" style={{ background: 'var(--bg-white)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {stats.map((s, i) => (
              <motion.div 
                key={i}
                className="premium-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '40px 24px' }}
              >
                <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(255, 193, 7, 0.1)', color: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <s.icon size={32} />
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '8px', color: 'var(--deep-blue)', letterSpacing: '-1px' }}>{s.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners Section ── */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', color: 'var(--deep-blue)', marginBottom: '16px', fontWeight: 800 }}>Where Our <span style={{ color: 'var(--ocean-blue)' }}>Alumni</span> Succeed</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Direct recruitment pipelines with top European and global employers.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', alignItems: 'center' }}>
            {[
              { name: 'Google', icon: Globe },
              { name: 'Microsoft', icon: Monitor },
              { name: 'Deloitte', icon: Building2 },
              { name: 'Amazon', icon: ShoppingCart },
              { name: 'Spotify', icon: Music },
              { name: 'Accenture', icon: Briefcase },
              { name: 'IBM', icon: Server },
              { name: 'Apple', icon: Smartphone },
              { name: 'Meta', icon: Users },
              { name: 'PwC', icon: Building2 },
            ].map((company, i) => (
              <motion.div 
                key={i} 
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '20px 32px', 
                  background: 'white', 
                  borderRadius: '16px', 
                  boxShadow: 'var(--shadow-soft)', 
                  border: '1px solid rgba(0,0,0,0.05)',
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  color: 'var(--text-muted)',
                  letterSpacing: '-0.5px',
                  transition: 'var(--transition)'
                }}
                whileHover={{ y: -5, color: 'var(--deep-blue)', borderColor: 'var(--ocean-blue)', boxShadow: 'var(--shadow-md)' }}
              >
                <company.icon size={28} style={{ opacity: 0.8 }} />
                <span>{company.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Stories ── */}
      <section className="section" style={{ background: 'var(--bg-slate)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 className="section-title">Global <span className="gold-text">Success</span> Stories</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Hear from our alumni working at the forefront of global industry.</p>
          </div>
          
          <div className="grid-3">
            {stories.map((story, i) => (
              <motion.div 
                key={i} 
                className="premium-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '48px' }}
              >
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '32px' }}>
                  <img src={story.avatar} alt={story.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--gold)' }} />
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--midnight)', marginBottom: '4px' }}>{story.name}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--gold-dark)', fontWeight: 700 }}>{story.role}</p>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, fontStyle: 'italic' }}>
                  "{story.text}"
                </p>
                <div style={{ marginTop: '32px', display: 'flex', gap: '4px' }}>
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="var(--gold)" color="var(--gold)" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              background: 'var(--midnight)', 
              borderRadius: '48px', 
              padding: '100px 60px', 
              color: 'white', 
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'var(--gold)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.15 }} />
            <h2 className="hero-title" style={{ color: 'white', marginBottom: '32px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Your Future <br/> <span className="gold-text">Starts Here.</span></h2>
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto 56px' }}>
              Join the ranks of our successful alumni. Apply for the next intake today.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <Link href="/courses" className="btn btn-gold">
                Find Your Program <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
