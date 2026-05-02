"use client";

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  MessageCircle,
  Clock,
  Sparkles,
  Globe,
  Headphones
} from 'lucide-react';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-white)' }}>
      {/* ── Subpage Hero ── */}
      <section className="section" style={{ paddingTop: '200px', paddingBottom: '120px', background: 'var(--midnight)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--midnight) 20%, transparent 100%)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', borderRadius: '100px', background: 'rgba(249, 200, 14, 0.1)', border: '1px solid var(--gold-soft)', color: 'var(--gold)', fontWeight: 800, marginBottom: '24px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            <Headphones size={18} />
            <span>Admissions Assistance</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title"
            style={{ marginBottom: '24px', color: 'white' }}
          >
            Get in <span className="gold-text">Touch.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Our dedicated admissions officers are ready to guide you through every step of your European academic journey.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>
            {/* ── Left Info ── */}
            <div>
              <div style={{ marginBottom: '64px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--primary)' }}>Connect with Our <br/> <span className="gradient-text">Admissions Hub.</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Whether you have questions about specific programs, visa requirements, or living in Albania, we're here to help.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--primary)' }}>Visit Us</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>123 Academic Square, Connaught Place,<br/> New Delhi, India 110001</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--primary)' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>+91 98765 43210 <br/> +91 98765 01234</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--primary)' }}>Email Us</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>admissions@studyalbania.in <br/> info@studyalbania.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Form ── */}
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="premium-card" 
                style={{ padding: '64px' }}
              >
                <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>First Name</label>
                      <input type="text" placeholder="John" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', background: 'var(--bg-slate)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>Last Name</label>
                      <input type="text" placeholder="Doe" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', background: 'var(--bg-slate)' }} />
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>Email Address</label>
                    <input type="email" placeholder="john@example.com" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', background: 'var(--bg-slate)' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>Interested Course</label>
                    <select style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', background: 'var(--bg-slate)', appearance: 'none' }}>
                      <option>Select a field</option>
                      <option>Computer Science & IT</option>
                      <option>Business & Management</option>
                      <option>Health & Medical Sciences</option>
                      <option>Engineering & Technology</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>How can we help?</label>
                    <textarea rows="4" placeholder="Tell us about your academic goals..." style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', background: 'var(--bg-slate)', resize: 'none' }}></textarea>
                  </div>

                  <button className="btn btn-primary" style={{ padding: '20px', fontSize: '1.1rem' }}>
                    Send Inquiry <Send size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

