"use client";

import { motion } from 'framer-motion';
import { 
  Target, 
  Shield, 
  Heart, 
  Globe, 
  CheckCircle2,
  Sparkles,
  Award,
  Users
} from 'lucide-react';

const values = [
  { icon: Target, title: "Academic Precision", desc: "Our selection process ensures only the most rigorous ECTS-accredited programs are presented to our students." },
  { icon: Shield, title: "Institutional Integrity", desc: "We maintain absolute transparency in admissions, visa processing, and financial frameworks." },
  { icon: Heart, title: "Student Centricity", desc: "Every scholar receives personalized guidance from application to career placement in Europe." },
  { icon: Globe, title: "Global Integration", desc: "We bridge the gap between regional potential and international career opportunities in the EU." },
];

const journey = [
  { year: "2018", title: "Founded", desc: "Started with a vision to make European education accessible to Indian students." },
  { year: "2019", title: "First Batch", desc: "Successfully placed 50+ students in Albanian universities." },
  { year: "2021", title: "5 University Partners", desc: "Expanded partnerships to cover all major institutions in Albania." },
  { year: "2023", title: "500+ Alumni", desc: "Growing alumni network across Europe with 92% placement rate." },
  { year: "2025", title: "Regional Offices", desc: "Opened offices in Delhi, Mumbai, and Bangalore for better student access." }
];

const team = [
  { name: "Alban Hoxha", role: "Founder & CEO", bio: "Visionary leader with 15+ years in international education systems.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400" },
  { name: "Dr. Elena Rama", role: "Academic Director", bio: "Expert in ECTS accreditation and European university curriculum standards.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400" },
  { name: "Rajesh Kumar", role: "Regional Head (India)", bio: "Bridging the gap for Indian students with direct institutional liaison.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400" },
  { name: "Sofia Meta", role: "Student Success Manager", bio: "Dedicated to ensuring smooth transitions and post-landing support.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400" },
];

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-white)' }}>
      {/* ── Subpage Hero ── */}
      <section className="section" style={{ paddingTop: '200px', paddingBottom: '120px', background: 'var(--midnight)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--midnight) 20%, transparent 100%)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', borderRadius: '100px', background: 'rgba(249, 200, 14, 0.1)', border: '1px solid var(--gold-soft)', color: 'var(--gold)', fontWeight: 800, marginBottom: '24px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            <Sparkles size={18} />
            <span>Pioneering Global Education</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title"
            style={{ marginBottom: '24px', color: 'white' }}
          >
            Our <span className="gold-text">Mission</span> & Vision.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Study Albania is more than an agency; we are a strategic gateway for ambitious students seeking world-class European education and career mobility.
          </motion.p>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '100px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Bridging the Gap to <br/> <span className="gradient-text">Academic Excellence.</span></h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '40px' }}>
                Founded on the principles of accessibility and excellence, Study Albania has successfully placed thousands of international scholars into premium English-taught programs. Our exclusive partnerships with Albania's top-tier universities ensure that our students receive education that is both globally recognized and locally impactful.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {[
                  "100% ECTS Compliance",
                  "Verified Career Pipelines",
                  "Strategic EU Mobility",
                  "Direct University Liaison",
                  "Comprehensive Visa Care",
                  "Post-Graduation Support"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: 800, color: 'var(--midnight)' }}>
                    <CheckCircle2 size={22} color="var(--gold)" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ borderRadius: '32px', overflow: 'hidden', height: '650px', boxShadow: 'var(--shadow-premium)', position: 'relative' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" 
                alt="Students studying" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--midnight) 0%, transparent 50%)', display: 'flex', alignItems: 'flex-end', padding: '48px' }}>
                <div style={{ color: 'white' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)' }}>98%</div>
                  <div style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Visa Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 className="section-title" style={{ color: 'white' }}>The <span className="gold-text">Pillars</span> of Our Success</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Our core values define every student interaction and university partnership.</p>
          </div>
          
          <div className="grid-3">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                className="premium-card"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.05)' }}
                whileHover={{ y: -12, borderColor: 'var(--gold)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'var(--gold)', color: 'var(--midnight)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                  <v.icon size={28} />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'white' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Section ── */}
      <section className="section" style={{ background: 'var(--bg-white)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 className="section-title" style={{ color: 'var(--midnight)', fontSize: '3rem' }}>Our <span className="gold-text">Journey</span></h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '24px', width: '2px', background: 'var(--gold-soft)' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {journey.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ position: 'relative', paddingLeft: '80px' }}
                >
                  {/* Timeline Dot */}
                  <div style={{ position: 'absolute', left: '16px', top: '32px', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--gold)', border: '4px solid white', boxShadow: '0 0 0 2px var(--gold-soft)' }} />
                  
                  <div className="premium-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'inline-block', padding: '6px 16px', background: 'var(--midnight)', color: 'var(--gold)', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 800, alignSelf: 'flex-start' }}>
                      {item.year}
                    </div>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--midnight)', fontWeight: 800 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="section" style={{ background: 'var(--bg-slate)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 className="section-title">Meet Our <span className="gradient-text">Team</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Dedicated professionals guiding your education journey.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                className="premium-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '0', overflow: 'hidden' }}
              >
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '32px' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--midnight)', marginBottom: '4px' }}>{member.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gold-dark)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '1px' }}>{member.role}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


