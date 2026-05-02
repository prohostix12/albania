"use client";

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Search,
  GraduationCap,
  Sparkles,
  Plane,
  ShieldCheck,
  Globe,
  Award,
  Users,
  Home,
  MapPin,
  User,
  Compass,
  CheckCircle,
  TrendingUp,
  MessageCircle,
  LayoutGrid,
  Euro,
  Briefcase,
  PlayCircle
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'white' }}>
      {/* ── Section 1: Split SaaS Hero ── */}
      <section style={{ padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ocean-blue)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
              <LayoutGrid size={18} />
              <span>Premium Education Portal</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(4rem, 6vw, 6rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '32px', color: 'var(--deep-blue)' }}>
              <span style={{ color: 'var(--deep-blue)' }}>Explore.</span><br/>
              <span style={{ color: 'var(--ocean-blue)' }}>Learn.</span> <span style={{ color: 'var(--yellow)' }}>Grow.</span>
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '48px', maxWidth: '540px' }}>
              Unlock global opportunities with personalized academic guidance. We bridge the gap between aspirational scholars and world-class European institutions.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '64px' }}>
              <Link href="/courses" className="btn btn-deep" style={{ padding: '16px 32px' }}>Apply Now <ArrowRight size={20} /></Link>
              <Link href="/universities" className="btn btn-ocean" style={{ padding: '16px 32px' }}>Explore Programs</Link>
            </div>

            {/* Airplane Path Animation */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px' }}
            >
              <div style={{ width: '200px', height: '2px', border: '1px dashed var(--sky-blue)', opacity: 0.5 }} />
              <Plane size={32} color="var(--ocean-blue)" style={{ transform: 'rotate(0deg)' }} />
            </motion.div>
          </motion.div>

          {/* Right Content: Vertical Image Slices */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', height: '500px' }}>
            {[
              { url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80", label: "Paris" },
              { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80", label: "Students" },
              { url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80", label: "London" },
              { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80", label: "Graduate" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ height: '0%' }}
                animate={{ height: '100%' }}
                transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  position: 'relative', 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden',
                  marginTop: i % 2 === 0 ? '0' : '40px',
                  marginBottom: i % 2 === 0 ? '40px' : '0'
                }}
              >
                <img src={item.url} alt={item.label} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13, 27, 61, 0.6) 0%, transparent 40%)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ── Section: Why Choose Albania ── */}
      <section className="section" style={{ background: 'var(--light-gray)', color: 'var(--text-primary)', position: 'relative', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: 'var(--deep-blue)' }}>Why Choose Albania?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>Experience a world-class European education system at a fraction of the cost.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { icon: GraduationCap, title: "3-Year Bachelor / 2-Year Master", desc: "Fast-tracked European degree programs.", accent: "var(--ocean-blue)" },
              { icon: Globe, title: "European Credit Transfer (ECTS)", desc: "Globally recognized degrees and credit transfers.", accent: "var(--yellow)" },
              { icon: Euro, title: "Low Tuition Fees", desc: "Highly affordable compared to the rest of Europe.", accent: "var(--ocean-blue)" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                style={{ 
                  padding: '48px 32px', 
                  borderRadius: '24px', 
                  background: 'white', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{ 
                  width: '72px', height: '72px', borderRadius: '50%', 
                  background: feature.accent === 'var(--yellow)' ? 'rgba(255, 193, 7, 0.15)' : 'rgba(30, 115, 216, 0.1)', 
                  color: feature.accent === 'var(--yellow)' ? '#d4a004' : feature.accent, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  marginBottom: '24px' 
                }}>
                  <feature.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 800, color: 'var(--deep-blue)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: Top Universities ── */}
      <section className="section" style={{ background: 'var(--light-gray)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <span style={{ color: 'var(--ocean-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', display: 'block', marginBottom: '12px' }}>Prestigious Institutions</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--deep-blue)' }}>Top Universities</h2>
            </div>
            <Link href="/universities" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', border: '2px solid var(--deep-blue)', color: 'var(--deep-blue)', fontWeight: 700, textDecoration: 'none' }}>
              View All Universities <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { 
                name: "University of Tirana", 
                location: "Tirana, Albania", 
                img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80",
                desc: "The largest and highest ranking public university in Albania."
              },
              { 
                name: "Epoka University", 
                location: "Tirana, Albania", 
                img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
                desc: "A premier private institution focusing on technology, architecture and business."
              },
              { 
                name: "Polis University", 
                location: "Tirana, Albania", 
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
                desc: "Specialized in architecture, art design, and urban planning."
              }
            ].map((uni, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
                style={{ 
                  background: 'var(--deep-blue)', 
                  borderRadius: '24px', 
                  overflow: 'hidden',
                  position: 'relative',
                  height: '420px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: 'all 0.4s ease'
                }}
              >
                <motion.img 
                  src={uni.img} 
                  alt={uni.name} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                
                {/* Gradient Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13, 27, 61, 0.95) 0%, rgba(13, 27, 61, 0.4) 60%, transparent 100%)', pointerEvents: 'none' }} />
                
                {/* Location Badge */}
                <div style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--deep-blue)', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                  <MapPin size={14} color="var(--ocean-blue)" />
                  {uni.location}
                </div>

                {/* Content Container */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px', display: 'flex', flexDirection: 'column', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '8px' }}>{uni.name}</h3>
                  <p style={{ color: 'var(--sky-blue)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', opacity: 0.9 }}>{uni.desc}</p>
                  
                  <Link href={`/universities`} style={{ color: 'var(--yellow)', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Explore Programs <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: Career & Global Pathways ── */}
      <section className="section" style={{ background: 'white', color: 'var(--text-primary)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '64px', color: 'var(--deep-blue)' }}>Career & Global Pathways</h2>
            
            {/* Horizontal 3 Items */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', textAlign: 'left', marginBottom: '80px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255, 193, 7, 0.15)', color: '#d4a004', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Briefcase size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--deep-blue)', marginBottom: '8px' }}>Internships During Study</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Gain practical experience through mandatory and optional industry placements.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(30, 115, 216, 0.1)', color: 'var(--ocean-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Globe size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--deep-blue)', marginBottom: '8px' }}>Job Opportunities in Europe</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>An Albanian degree opens doors to the vast European job market.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255, 193, 7, 0.15)', color: '#d4a004', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GraduationCap size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--deep-blue)', marginBottom: '8px' }}>Pathway to EU Masters</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Seamlessly transfer or apply to top universities across the EU.</p>
                </div>
              </div>
            </div>
            
            {/* 3 Big Cards Below */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              <motion.div 
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                style={{ background: 'var(--light-gray)', padding: '48px 32px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.03)', transition: 'all 0.3s ease' }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--ocean-blue)', marginBottom: '16px' }}>20hrs/week</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--deep-blue)', marginBottom: '12px' }}>Part-time Work Options</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Legally work while studying</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                style={{ background: 'var(--light-gray)', padding: '48px 32px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.03)', transition: 'all 0.3s ease' }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--yellow)', marginBottom: '16px' }}>₹25k - ₹40k</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--deep-blue)', marginBottom: '12px' }}>Monthly Living Cost</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Highly affordable lifestyle</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                style={{ background: 'var(--light-gray)', padding: '48px 32px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.03)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(30, 115, 216, 0.1)', color: 'var(--ocean-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <MapPin size={32} strokeWidth={1.5} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--deep-blue)', marginBottom: '12px' }}>Affordable Accommodation</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>Hostels & shared apartments available easily</p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── Section: Student Experiences ── */}
      <section className="section" style={{ background: '#050505', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Student Experiences</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Hear directly from international students studying in Albania.</p>
          </div>
          
          {/* Scrollable Container */}
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            overflowX: 'auto', 
            paddingBottom: '32px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--ocean-blue) #222'
          }}>
            {[
              { img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80", name: "Student #1", program: "IT Program" },
              { img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80", name: "Student #2", program: "Medical Program" },
              { img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80", name: "Student #3", program: "Business Program" },
              { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80", name: "Student #4", program: "Engineering Program" }
            ].map((student, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                style={{ 
                  width: '380px', 
                  flexShrink: 0, 
                  height: '240px', 
                  borderRadius: '20px', 
                  position: 'relative', 
                  overflow: 'hidden',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer'
                }}
              >
                <img src={student.img} alt={student.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', transition: 'background 0.3s ease' }} />
                
                {/* Play Button */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayCircle size={56} color="white" strokeWidth={1.5} />
                </div>
                
                {/* Text Content */}
                <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '4px' }}>{student.name}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{student.program}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA Banner ── */}
      <section style={{ padding: '40px 0 60px' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden',
              background: 'var(--deep-blue)',
              padding: '48px 32px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(13, 27, 61, 0.15)'
            }}
          >
            {/* Decorative Background Elements */}
            <div style={{ position: 'absolute', top: '-40%', left: '-10%', width: '300px', height: '300px', background: 'var(--ocean-blue)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.25 }} />
            <div style={{ position: 'absolute', bottom: '-40%', right: '-10%', width: '300px', height: '300px', background: 'var(--yellow)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.15 }} />

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Sparkles size={14} color="var(--yellow)" />
                <span style={{ color: 'white', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Start Your Future</span>
              </div>
              
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, color: 'white', marginBottom: '16px', lineHeight: 1.1, letterSpacing: '-0.5px' }}>
                Your Journey. <span style={{ color: 'var(--yellow)' }}>Worldwide.</span>
              </h2>
              
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '24px', lineHeight: 1.5 }}>
                Join thousands of students who have discovered their path to elite European universities. Experience a world-class education starting now.
              </p>
              
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/courses" className="btn" style={{ 
                  background: 'var(--yellow)', 
                  color: 'var(--deep-blue)', 
                  padding: '14px 28px', 
                  fontSize: '0.95rem', 
                  fontWeight: 800, 
                  borderRadius: '10px', 
                  textDecoration: 'none',
                  boxShadow: '0 10px 20px rgba(255, 193, 7, 0.2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  Begin Application <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn" style={{ 
                  background: 'rgba(255,255,255,0.1)', 
                  color: 'white', 
                  padding: '14px 28px', 
                  fontSize: '0.95rem', 
                  fontWeight: 700, 
                  borderRadius: '10px', 
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
