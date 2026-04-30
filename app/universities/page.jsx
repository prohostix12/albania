"use client";

import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  BookOpen, 
  Award, 
  Clock, 
  DollarSign,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Building2,
  GraduationCap,
  Globe2
} from 'lucide-react';
import Link from 'next/link';
import './universities.css';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const universities = [
  {
    id: "canadian-institute",
    name: "Canadian Institute of Technology",
    location: "Tirana, Albania",
    founded: "2011",
    students: "2,500+",
    type: "Private",
    accreditation: "ECTS Accredited",
    tuitionRange: "€2,000 – €3,500/year",
    description: "A leading private university offering Canadian-standard education in IT, Engineering, and Business. Known for its modern campus, international faculty, and strong industry ties across Europe and North America.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    courses: [
      { name: "Computer Engineering", duration: "3 years", level: "Bachelor" },
      { name: "Software Engineering", duration: "3 years", level: "Bachelor" },
      { name: "Business Administration", duration: "3 years", level: "Bachelor" },
      { name: "Information Systems", duration: "2 years", level: "Master" },
      { name: "Business Analytics", duration: "2 years", level: "Master" }
    ],
    highlights: [
      "Canadian-curriculum based programs",
      "International faculty from 10+ countries",
      "Industry partnerships with top EU companies",
      "Modern smart-campus with digital labs"
    ],
    color: "#DC2626"
  },
  {
    id: "epoka-university",
    name: "Epoka University",
    location: "Tirana, Albania",
    founded: "2007",
    students: "4,000+",
    type: "Private",
    accreditation: "ECTS Accredited",
    tuitionRange: "€2,500 – €4,000/year",
    description: "One of Albania's most prestigious private institutions, renowned for its rigorous engineering and architecture programs. The campus is a hub of multicultural learning, attracting students from over 30 countries.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    courses: [
      { name: "Civil Engineering", duration: "3 years", level: "Bachelor" },
      { name: "Architecture", duration: "5 years", level: "Integrated" },
      { name: "Computer Engineering", duration: "3 years", level: "Bachelor" },
      { name: "Banking & Finance", duration: "3 years", level: "Bachelor" },
      { name: "Structural Engineering", duration: "2 years", level: "Master" }
    ],
    highlights: [
      "Students from 30+ nationalities",
      "State-of-the-art engineering labs",
      "Strong research output and publications",
      "Career placement rate of 92%"
    ],
    color: "#D4A017"
  },
  {
    id: "mediterranean-university",
    name: "Mediterranean University of Albania",
    location: "Tirana, Albania",
    founded: "2006",
    students: "3,000+",
    type: "Private",
    accreditation: "ECTS Accredited",
    tuitionRange: "€1,800 – €3,000/year",
    description: "A university focused on producing industry-ready graduates in Business, Economics, and Social Sciences. Known for affordable tuition and practical, hands-on education methodology.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    courses: [
      { name: "Business Administration", duration: "3 years", level: "Bachelor" },
      { name: "Economics", duration: "3 years", level: "Bachelor" },
      { name: "Political Science", duration: "3 years", level: "Bachelor" },
      { name: "International Relations", duration: "2 years", level: "Master" },
      { name: "MBA", duration: "2 years", level: "Master" }
    ],
    highlights: [
      "Most affordable tuition in Albania",
      "Focus on entrepreneurship & startups",
      "Exchange programs with EU universities",
      "Flexible scheduling for working students"
    ],
    color: "#059669"
  },
  {
    id: "western-balkans",
    name: "Western Balkans University",
    location: "Tirana, Albania",
    founded: "2016",
    students: "1,500+",
    type: "Private",
    accreditation: "ECTS Accredited",
    tuitionRange: "€2,000 – €3,200/year",
    description: "A modern, innovation-driven university with a strong emphasis on technology, digital transformation, and creative industries. Ideal for students seeking cutting-edge education in emerging fields.",
    img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    courses: [
      { name: "Digital Marketing", duration: "3 years", level: "Bachelor" },
      { name: "Information Technology", duration: "3 years", level: "Bachelor" },
      { name: "Innovation Management", duration: "3 years", level: "Bachelor" },
      { name: "Data Science", duration: "2 years", level: "Master" },
      { name: "Cyber Security", duration: "2 years", level: "Master" }
    ],
    highlights: [
      "Focus on AI, Data Science & Innovation",
      "Startup incubator on campus",
      "Partnerships with tech companies",
      "100% English-taught programs"
    ],
    color: "#7C3AED"
  },
  {
    id: "luarasi-university",
    name: "Luarasi University",
    location: "Tirana, Albania",
    founded: "2003",
    students: "3,500+",
    type: "Private",
    accreditation: "ECTS Accredited",
    tuitionRange: "€1,500 – €2,800/year",
    description: "One of Albania's oldest and most respected private universities, especially known for its Law and Social Sciences faculties. The institution boasts strong ties to Albania's judiciary and public administration.",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    courses: [
      { name: "Law", duration: "4 years", level: "Bachelor" },
      { name: "Public Administration", duration: "3 years", level: "Bachelor" },
      { name: "Psychology", duration: "3 years", level: "Bachelor" },
      { name: "Criminal Law", duration: "2 years", level: "Master" },
      { name: "Social Work", duration: "2 years", level: "Master" }
    ],
    highlights: [
      "Top-ranked Law faculty in Albania",
      "Moot court & legal clinic programs",
      "Government & NGO internship network",
      "Alumni in key public sector positions"
    ],
    color: "#B45309"
  }
];

function UniversityCard({ uni }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`uni-detail-card glass-card-premium ${isExpanded ? 'is-expanded' : ''}`}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Card Image */}
      <div className="uni-detail-img">
        <img src={uni.img} alt={uni.name} loading="lazy" />
        <div className="uni-detail-img-overlay">
          <span className="uni-type-badge" style={{ background: uni.color }}>
            {uni.type}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="uni-detail-body">
        <div className="uni-detail-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
            <h2 style={{ color: 'white', margin: 0 }}>{uni.name}</h2>
            <button 
              className={`btn ${isExpanded ? 'btn-secondary' : 'btn-primary'}`} 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            >
              {isExpanded ? 'Close' : 'View Details'}
            </button>
          </div>
          <div className="uni-meta-row" style={{ marginTop: '12px' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}><MapPin size={16} /> {uni.location}</span>
          </div>
        </div>

        <p className="uni-description" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: isExpanded ? '24px' : '0' }}>
          {uni.description}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: 'hidden' }}
            >
              <div className="uni-expanded-content">
                <div className="uni-meta-row" style={{ marginBottom: '24px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}><Clock size={16} /> Est. {uni.founded}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}><Users size={16} /> {uni.students} Students</span>
                </div>

                {/* Key Info Chips */}
                <div className="uni-info-chips">
                  <div className="info-chip">
                    <Award size={16} />
                    <span>{uni.accreditation}</span>
                  </div>
                  <div className="info-chip">
                    <DollarSign size={16} />
                    <span>{uni.tuitionRange}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="uni-highlights">
                  <h4 style={{ color: 'white' }}>Why Choose This University?</h4>
                  <div className="highlights-grid">
                    {uni.highlights.map((h, i) => (
                      <div key={i} className="highlight-item" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--secondary-blue)' }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Courses Table */}
                <div className="uni-courses-section">
                  <h4 style={{ color: 'white' }}>Programs Offered</h4>
                  <div className="courses-table-wrapper">
                    <table className="courses-table">
                      <thead>
                        <tr>
                          <th>Program</th>
                          <th>Duration</th>
                          <th>Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {uni.courses.map((c, i) => (
                          <tr key={i}>
                            <td style={{ color: 'white' }}>{c.name}</td>
                            <td style={{ color: 'rgba(255,255,255,0.6)' }}>{c.duration}</td>
                            <td>
                              <span className="level-badge" style={{ 
                                background: c.level === 'Bachelor' ? 'rgba(212, 160, 23, 0.15)' : c.level === 'Master' ? 'rgba(5, 150, 105, 0.15)' : 'rgba(180, 83, 9, 0.15)',
                                color: c.level === 'Bachelor' ? '#D4A017' : c.level === 'Master' ? '#10b981' : '#f59e0b'
                              }}>
                                {c.level}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Actions */}
                <div className="uni-actions">
                  <button className="btn btn-primary">
                    Apply Now <ArrowRight size={16} />
                  </button>
                  <button className="btn btn-whatsapp">
                    <MessageCircle size={16} /> WhatsApp Enquiry
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function UniversitiesPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="uni-page noise-bg">
      {/* Scroll Progress */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Hero Banner */}
      <section className="uni-hero">
        <div className="uni-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Albanian Universities"
          />
        </div>
        <div className="uni-hero-overlay" />
        <div className="uni-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uni-hero-tag">Explore Institutions</p>
            <div className="reveal-text">
              <h1 className="uni-hero-title reveal-text-content">
                Top Universities in <span>Albania</span>
              </h1>
            </div>
            <p className="uni-hero-subtitle">
              Discover ECTS-accredited universities offering affordable, globally recognized degrees in Engineering, IT, Business, Law, and more.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="uni-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="stat-item">
              <Building2 size={24} />
              <div>
                <strong>5+</strong>
                <span>Partner Universities</span>
              </div>
            </div>
            <div className="stat-item">
              <BookOpen size={24} />
              <div>
                <strong>25+</strong>
                <span>Programs</span>
              </div>
            </div>
            <div className="stat-item">
              <Globe2 size={24} />
              <div>
                <strong>30+</strong>
                <span>Nationalities</span>
              </div>
            </div>
            <div className="stat-item">
              <DollarSign size={24} />
              <div>
                <strong>€1.5k</strong>
                <span>Starting Tuition</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* University Listing */}
      <section className="uni-listing section-padding">
        <div className="container">
          <div className="uni-listing-grid">
            {universities.map((uni) => (
              <UniversityCard key={uni.id} uni={uni} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.h2
            className="cta-title"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Can't Decide? Let Us Help!
          </motion.h2>
          <motion.p
            style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '1.1rem', position: 'relative', zIndex: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            Our counsellors will match you with the right university based on your goals, budget, and interests.
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="btn btn-primary" style={{ background: '#fff', color: '#111' }}>
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
