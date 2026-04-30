"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Play,
  X,
  GraduationCap, 
  Euro, 
  Globe2, 
  Briefcase, 
  MapPin, 
  CheckCircle2,
  PlayCircle,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  Star,
  Users,
  BookOpen,
  Shield,
  ChevronDown
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

/* Animated Counter Component */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const step = target / (duration * 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* Typewriter text rotator */
const rotatingWords = [
  "Affordable European Education",
  "Globally Recognized Degrees",
  "Gateway to EU Careers",
  "Your Future Starts Here"
];

function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="video-modal-overlay"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="video-modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button className="video-close-btn" onClick={onClose}><X size={24} /></button>
        <div className="video-player-wrapper">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            title="AJINORA Preview" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="noise-bg">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="progress-bar" 
        style={{ scaleX }} 
      />

      {/* 1. Hero Section — Cinematic */}
      <section className="hero">
        <div className="hero-visual">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src="https://v1.pinimg.com/videos/mc/720p/b8/a0/c3/b8a0c30eb2f36854d3ca7e877c579878.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>


        {/* Floating Particles */}
        <div className="hero-particles">
          {[
            { left: 5, bottom: 12, dur: 6, del: 0, dy: -280, dx: 40 },
            { left: 15, bottom: 8, dur: 7, del: 1.2, dy: -350, dx: -30 },
            { left: 25, bottom: 18, dur: 5, del: 2.5, dy: -240, dx: 60 },
            { left: 35, bottom: 4, dur: 8, del: 0.5, dy: -400, dx: -50 },
            { left: 45, bottom: 14, dur: 6, del: 3, dy: -300, dx: 20 },
            { left: 55, bottom: 6, dur: 9, del: 1, dy: -320, dx: -70 },
            { left: 65, bottom: 16, dur: 5, del: 4, dy: -260, dx: 45 },
            { left: 75, bottom: 2, dur: 7, del: 0.8, dy: -380, dx: -25 },
            { left: 85, bottom: 10, dur: 6, del: 2, dy: -290, dx: 55 },
            { left: 92, bottom: 15, dur: 8, del: 3.5, dy: -340, dx: -40 },
            { left: 10, bottom: 3, dur: 7, del: 1.5, dy: -310, dx: 35 },
            { left: 30, bottom: 11, dur: 5, del: 4.5, dy: -250, dx: -60 },
            { left: 50, bottom: 19, dur: 9, del: 0.3, dy: -370, dx: 15 },
            { left: 70, bottom: 7, dur: 6, del: 2.8, dy: -280, dx: -45 },
            { left: 88, bottom: 13, dur: 8, del: 1.8, dy: -330, dx: 50 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [0, p.dy],
                x: [0, p.dx]
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                delay: p.del,
                ease: "easeOut"
              }}
              style={{
                left: `${p.left}%`,
                bottom: `${p.bottom}%`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="hero-content">
          {/* Tag */}
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap size={16} />
            <span>Your Gateway to European Education</span>
          </motion.div>

          {/* Headline */}
          <div className="reveal-text">
            <motion.h1 
              className="hero-title reveal-text-content"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Study in <span className="hero-highlight">Albania</span>
            </motion.h1>
          </div>

          {/* Rotating Subtitle */}
          <div className="hero-subtitle-wrapper">
            <AnimatePresence mode="wait">
              <motion.p 
                key={wordIndex}
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.5 }}
              >
                {rotatingWords[wordIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Join 5,000+ international students in Albania. Get world-class Bachelor & Master degrees 
            at a fraction of the cost — with pathways to careers across Europe.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button 
              className="btn btn-primary hero-btn-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now <ArrowRight size={18} />
            </motion.button>
          </motion.div>


        </div>
      </section>

      {/* 2. About Albania & Education */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <motion.h2 
              className="section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Why Choose Albania?
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Experience a world-class European education system at a fraction of the cost.
            </motion.p>
          </div>

          <motion.div 
            className="about-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: GraduationCap, title: "3-Year Bachelor / 2-Year Master", desc: "Fast-tracked European degree programs." },
              { icon: Globe2, title: "European Credit Transfer (ECTS)", desc: "Globally recognized degrees and credit transfers." },
              { icon: Euro, title: "Low Tuition Fees", desc: "Highly affordable compared to the rest of Europe." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="about-card glass-card-premium" 
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="about-icon">
                  <item.icon size={32} />
                </div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '12px', color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Universities & Courses */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Top Universities
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Partnering with Albania's premier institutions for your academic success.
            </motion.p>
          </div>

          <motion.div 
            className="universities-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { name: "Canadian Institute of Technology", courses: "IT, Engineering, Business", img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Epoka University", courses: "Engineering, Architecture", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Mediterranean University", courses: "Business, Economics", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Western Balkans University", courses: "Technology, Innovation", img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Luarasi University", courses: "Law, Social Sciences", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map((uni, i) => (
              <motion.div key={i} className="uni-card" variants={fadeIn}>
                <div className="uni-img-wrapper">
                  <img src={uni.img} alt={uni.name} className="uni-img" loading="lazy" />
                </div>
                <div className="uni-content glass-card-premium" style={{ border: 'none', background: 'rgba(255,255,255,0.05)' }}>
                  <h3 className="uni-title" style={{ color: 'white' }}>{uni.name}</h3>
                  <p className="uni-courses" style={{ color: 'rgba(255,255,255,0.6)' }}>{uni.courses}</p>
                  <button className="btn btn-secondary" style={{ width: '100%', padding: '10px' }}>
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Placement Opportunities */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Career & Global Pathways
            </motion.h2>
          </div>

          <motion.div 
            className="features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="feature-item" variants={fadeIn}>
              <div className="feature-icon-wrapper"><Briefcase size={24} /></div>
              <div className="feature-content">
                <h4 style={{ color: 'white' }}>Internships During Study</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Gain practical experience through mandatory and optional industry placements.</p>
              </div>
            </motion.div>
            <motion.div className="feature-item" variants={fadeIn}>
              <div className="feature-icon-wrapper"><Globe2 size={24} /></div>
              <div className="feature-content">
                <h4 style={{ color: 'white' }}>Job Opportunities in Europe</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>An Albanian degree opens doors to the vast European job market.</p>
              </div>
            </motion.div>
            <motion.div className="feature-item" variants={fadeIn}>
              <div className="feature-icon-wrapper"><GraduationCap size={24} /></div>
              <div className="feature-content">
                <h4 style={{ color: 'white' }}>Pathway to EU Masters</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Seamlessly transfer or apply to top universities across the EU.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Part-Time Work & Living Cost */}
      <section className="section-padding" style={{ background: 'var(--bg-gradient)' }}>
        <div className="container">
          <motion.div 
            className="about-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="about-card glass-card-premium" 
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <h3 style={{ fontSize: '2rem', color: 'var(--secondary-blue)' }}>20hrs/week</h3>
              <p style={{ marginTop: '16px', fontWeight: '600', color: 'white' }}>Part-time Work Options</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>Legally work while studying</p>
            </motion.div>
            <motion.div 
              className="about-card glass-card-premium" 
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <h3 style={{ fontSize: '2rem', color: 'var(--secondary-blue)' }}>₹25k - ₹40k</h3>
              <p style={{ marginTop: '16px', fontWeight: '600', color: 'white' }}>Monthly Living Cost</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>Highly affordable lifestyle</p>
            </motion.div>
            <motion.div 
              className="about-card glass-card-premium" 
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div className="about-icon" style={{ margin: '0 auto 16px' }}><MapPin size={32} /></div>
              <p style={{ fontWeight: '600', color: 'white' }}>Affordable Accommodation</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>Hostels & shared apartments available easily</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Testimonials Carousel */}
      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Student Experiences
            </motion.h2>
            <p className="section-subtitle">Hear directly from international students studying in Albania.</p>
          </div>

          <motion.div 
            style={{ 
              display: 'flex', 
              gap: '24px', 
              overflowX: 'auto', 
              padding: '20px 4px',
              scrollSnapType: 'x mandatory'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[1, 2, 3].map((_, i) => (
              <div key={i} style={{ 
                flex: '0 0 80%', 
                maxWidth: '400px', 
                scrollSnapAlign: 'start',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16/9',
                backgroundColor: '#1a1a1a',
                boxShadow: 'var(--card-shadow)'
              }}>
                <img 
                  src={`https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                  alt="Student" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
                  <PlayCircle size={48} />
                </div>
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: 'white' }}>
                  <h4 style={{ margin: 0 }}>Student #{i+1}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>IT Program</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Strong Call-To-Action */}
      <section className="cta-section">
        <div className="container">
          <motion.h2 
            className="cta-title"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Start Your Study Abroad Journey Today
          </motion.h2>
          <motion.div 
            className="cta-buttons"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="btn btn-primary" style={{ background: 'var(--white)', color: 'var(--primary-blue)' }}>
              Apply Now
            </button>
            <button className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', background: 'transparent', color: 'var(--white)' }}>
              Free Counselling
            </button>
            <button className="btn btn-whatsapp">
              <MessageCircle size={20} /> WhatsApp Us
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
