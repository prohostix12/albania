"use client";

import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2
} from 'lucide-react';
import './contact.css';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const offices = [
  { city: "New Delhi", address: "123 Education Hub, Connaught Place", phone: "+91 98765 43210", email: "delhi@studyalbania.in" },
  { city: "Mumbai", address: "456 Learning Tower, Andheri West", phone: "+91 98765 43211", email: "mumbai@studyalbania.in" },
  { city: "Bangalore", address: "789 Campus Road, Koramangala", phone: "+91 98765 43212", email: "bangalore@studyalbania.in" },
];

const faqs = [
  { q: "What are the admission requirements?", a: "Requirements vary by university but generally include academic transcripts, English proficiency, passport copy, and a statement of purpose. We guide you through every step." },
  { q: "Is the degree recognized internationally?", a: "Yes! All partner universities are ECTS-accredited, meaning degrees are recognized across Europe and internationally." },
  { q: "What is the visa process like?", a: "We handle the complete visa process including documentation, application submission, and interview preparation with a 95%+ success rate." },
  { q: "Can I work while studying?", a: "Yes, students can work up to 20 hours per week during the academic year and full-time during holidays." },
  { q: "What is the cost of living in Albania?", a: "Living costs range from ₹25,000 to ₹40,000 per month including accommodation, food, transport, and personal expenses." },
];

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  return (
    <main className="contact-page noise-bg">
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Contact" />
        </div>
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="contact-hero-tag">Get in Touch</p>
            <div className="reveal-text">
              <h1 className="contact-hero-title reveal-text-content">We're Here to <span>Help</span></h1>
            </div>
            <p className="contact-hero-subtitle">
              Have questions? Our team is ready to assist you with admissions, visa, courses, or anything else.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <motion.div className="contact-form-card glass-card-premium" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ color: 'white' }}>Send Us a Message</h2>
              <p className="form-subtitle">Fill the form below and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div className="form-success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  <CheckCircle2 size={48} />
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 43210" />
                    </div>
                    <div className="form-group">
                      <label>Interested Course</label>
                      <input type="text" value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})} placeholder="e.g. Computer Engineering" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your goals..." style={{ color: 'white' }} />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Sidebar */}
            <motion.div className="contact-info" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div className="info-card glass-card-premium" variants={fadeIn} whileHover={{ x: 10 }}>
                <div className="info-icon"><Phone size={22} /></div>
                <div>
                  <h4 style={{ color: 'white' }}>Call Us</h4>
                  <p style={{ color: 'var(--secondary-blue)' }}>+91 98765 43210</p>
                  <p className="info-note" style={{ color: 'rgba(255,255,255,0.5)' }}>Mon–Sat, 9AM–7PM IST</p>
                </div>
              </motion.div>
              <motion.div className="info-card" variants={fadeIn}>
                <div className="info-icon"><Mail size={22} /></div>
                <div>
                  <h4 style={{ color: 'white' }}>Email Us</h4>
                  <p style={{ color: 'var(--secondary-blue)' }}>info@studyalbania.in</p>
                  <p className="info-note" style={{ color: 'rgba(255,255,255,0.5)' }}>We reply within 24 hours</p>
                </div>
              </motion.div>
              <motion.div className="info-card" variants={fadeIn}>
                <div className="info-icon whatsapp-icon"><MessageCircle size={22} /></div>
                <div>
                  <h4 style={{ color: 'white' }}>WhatsApp</h4>
                  <p style={{ color: 'var(--secondary-blue)' }}>+91 98765 43210</p>
                  <p className="info-note" style={{ color: 'rgba(255,255,255,0.5)' }}>Instant replies available</p>
                </div>
              </motion.div>
              <motion.div className="info-card" variants={fadeIn}>
                <div className="info-icon"><Clock size={22} /></div>
                <div>
                  <h4 style={{ color: 'white' }}>Office Hours</h4>
                  <p style={{ color: 'var(--secondary-blue)' }}>Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p className="info-note" style={{ color: 'rgba(255,255,255,0.5)' }}>Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Our Offices
            </motion.h2>
          </div>
          <motion.div className="offices-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {offices.map((o, i) => (
              <motion.div key={i} className="office-card glass-card-premium" variants={fadeIn}
                whileHover={{ y: -8 }}
              >
                <div className="office-pin"><MapPin size={20} /></div>
                <h3 style={{ color: 'white' }}>{o.city}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>{o.address}</p>
                <div className="office-contacts">
                  <span style={{ color: 'var(--secondary-blue)' }}><Phone size={14} /> {o.phone}</span>
                  <span style={{ color: 'var(--secondary-blue)' }}><Mail size={14} /> {o.email}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Frequently Asked Questions
            </motion.h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <motion.div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.3 }}>
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
