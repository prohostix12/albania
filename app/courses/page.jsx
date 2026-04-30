"use client";

import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Clock,
  GraduationCap,
  Search,
  Filter,
  ArrowRight,
  MessageCircle,
  MapPin,
  DollarSign,
  Star,
  ChevronDown,
  X
} from 'lucide-react';
import Link from 'next/link';
import './courses.css';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const allCourses = [
  // Canadian Institute of Technology
  { id: 1, name: "Computer Engineering", university: "Canadian Institute of Technology", level: "Bachelor", duration: "3 years", field: "Engineering", tuition: "€2,500/year", description: "Build expertise in hardware-software integration, embedded systems, and computer architecture with a Canadian-standard curriculum.", popular: true },
  { id: 2, name: "Software Engineering", university: "Canadian Institute of Technology", level: "Bachelor", duration: "3 years", field: "IT & Computing", tuition: "€2,500/year", description: "Master full-stack development, cloud computing, and agile methodologies to build scalable software systems.", popular: true },
  { id: 3, name: "Business Administration", university: "Canadian Institute of Technology", level: "Bachelor", duration: "3 years", field: "Business", tuition: "€2,000/year", description: "Develop leadership, strategic thinking, and management skills for the global business landscape." },
  { id: 4, name: "Information Systems", university: "Canadian Institute of Technology", level: "Master", duration: "2 years", field: "IT & Computing", tuition: "€3,000/year", description: "Advanced study in enterprise systems, data management, and digital transformation strategies." },
  { id: 5, name: "Business Analytics", university: "Canadian Institute of Technology", level: "Master", duration: "2 years", field: "Business", tuition: "€3,500/year", description: "Harness the power of data to drive strategic business decisions with analytics and AI tools." },

  // Epoka University
  { id: 6, name: "Civil Engineering", university: "Epoka University", level: "Bachelor", duration: "3 years", field: "Engineering", tuition: "€3,000/year", description: "Design and build infrastructure projects with a focus on structural analysis, geotechnics, and sustainable construction.", popular: true },
  { id: 7, name: "Architecture", university: "Epoka University", level: "Integrated", duration: "5 years", field: "Architecture", tuition: "€3,500/year", description: "A comprehensive program combining design, technology, and urban planning for aspiring architects." },
  { id: 8, name: "Computer Engineering", university: "Epoka University", level: "Bachelor", duration: "3 years", field: "Engineering", tuition: "€3,000/year", description: "Study algorithms, operating systems, and network engineering in state-of-the-art labs." },
  { id: 9, name: "Banking & Finance", university: "Epoka University", level: "Bachelor", duration: "3 years", field: "Business", tuition: "€2,500/year", description: "Gain deep knowledge in financial markets, investment banking, and risk management." },
  { id: 10, name: "Structural Engineering", university: "Epoka University", level: "Master", duration: "2 years", field: "Engineering", tuition: "€4,000/year", description: "Specialize in earthquake-resistant design, advanced materials, and computational structural analysis." },

  // Mediterranean University
  { id: 11, name: "Business Administration", university: "Mediterranean University", level: "Bachelor", duration: "3 years", field: "Business", tuition: "€1,800/year", description: "An affordable pathway into management, marketing, and organizational leadership." },
  { id: 12, name: "Economics", university: "Mediterranean University", level: "Bachelor", duration: "3 years", field: "Business", tuition: "€1,800/year", description: "Understand micro and macroeconomic theory, policy analysis, and international trade dynamics." },
  { id: 13, name: "Political Science", university: "Mediterranean University", level: "Bachelor", duration: "3 years", field: "Social Sciences", tuition: "€1,800/year", description: "Study governance, international relations, and political theory in a European context." },
  { id: 14, name: "International Relations", university: "Mediterranean University", level: "Master", duration: "2 years", field: "Social Sciences", tuition: "€2,500/year", description: "Deepen your understanding of diplomacy, global security, and international organizations." },
  { id: 15, name: "MBA", university: "Mediterranean University", level: "Master", duration: "2 years", field: "Business", tuition: "€3,000/year", description: "Accelerate your career with advanced business strategy, leadership, and entrepreneurship skills.", popular: true },

  // Western Balkans University
  { id: 16, name: "Digital Marketing", university: "Western Balkans University", level: "Bachelor", duration: "3 years", field: "Business", tuition: "€2,000/year", description: "Learn SEO, social media strategy, content marketing, and growth hacking for the digital age." },
  { id: 17, name: "Information Technology", university: "Western Balkans University", level: "Bachelor", duration: "3 years", field: "IT & Computing", tuition: "€2,200/year", description: "Broad-based IT education covering networking, databases, web development, and cybersecurity." },
  { id: 18, name: "Innovation Management", university: "Western Balkans University", level: "Bachelor", duration: "3 years", field: "Business", tuition: "€2,000/year", description: "Drive change and creativity in organizations with design thinking and innovation frameworks." },
  { id: 19, name: "Data Science", university: "Western Balkans University", level: "Master", duration: "2 years", field: "IT & Computing", tuition: "€3,200/year", description: "Master machine learning, statistical modelling, and big data engineering for industry applications.", popular: true },
  { id: 20, name: "Cyber Security", university: "Western Balkans University", level: "Master", duration: "2 years", field: "IT & Computing", tuition: "€3,200/year", description: "Protect digital infrastructure with expertise in ethical hacking, cryptography, and threat analysis." },

  // Luarasi University
  { id: 21, name: "Law", university: "Luarasi University", level: "Bachelor", duration: "4 years", field: "Law", tuition: "€1,500/year", description: "Albania's top-ranked law program covering constitutional, criminal, civil, and international law.", popular: true },
  { id: 22, name: "Public Administration", university: "Luarasi University", level: "Bachelor", duration: "3 years", field: "Social Sciences", tuition: "€1,500/year", description: "Prepare for careers in government, policy-making, and public sector management." },
  { id: 23, name: "Psychology", university: "Luarasi University", level: "Bachelor", duration: "3 years", field: "Social Sciences", tuition: "€1,800/year", description: "Explore human behavior, cognitive science, and clinical psychology fundamentals." },
  { id: 24, name: "Criminal Law", university: "Luarasi University", level: "Master", duration: "2 years", field: "Law", tuition: "€2,500/year", description: "Specialize in criminal justice, forensic law, and prosecution with moot court training." },
  { id: 25, name: "Social Work", university: "Luarasi University", level: "Master", duration: "2 years", field: "Social Sciences", tuition: "€2,200/year", description: "Make a difference through community development, family services, and social policy." },
];

const fields = ["All", "IT & Computing", "Engineering", "Business", "Law", "Social Sciences", "Architecture"];
const levels = ["All", "Bachelor", "Master", "Integrated"];
const universities = ["All", "Canadian Institute of Technology", "Epoka University", "Mediterranean University", "Western Balkans University", "Luarasi University"];

const levelColors = {
  Bachelor: { bg: 'rgba(212, 160, 23, 0.15)', color: '#D4A017' },
  Master: { bg: 'rgba(5, 150, 105, 0.15)', color: '#10b981' },
  Integrated: { bg: 'rgba(180, 83, 9, 0.15)', color: '#f59e0b' },
};

export default function CoursesPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedField, setSelectedField] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedUni, setSelectedUni] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = allCourses.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.university.toLowerCase().includes(searchQuery.toLowerCase());
    const matchField = selectedField === 'All' || c.field === selectedField;
    const matchLevel = selectedLevel === 'All' || c.level === selectedLevel;
    const matchUni = selectedUni === 'All' || c.university === selectedUni;
    return matchSearch && matchField && matchLevel && matchUni;
  });

  const activeFilterCount = [selectedField, selectedLevel, selectedUni].filter(f => f !== 'All').length;

  const clearFilters = () => {
    setSelectedField('All');
    setSelectedLevel('All');
    setSelectedUni('All');
    setSearchQuery('');
  };

  return (
    <main className="courses-page noise-bg">
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Hero */}
      <section className="courses-hero">
        <div className="hero-visual" />
        <div className="courses-hero-overlay" />
        <div className="courses-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="courses-hero-tag">Explore Programs</p>
            <div className="reveal-text">
              <h1 className="courses-hero-title reveal-text-content">
                Find Your Perfect <span>Course</span>
              </h1>
            </div>
            <p className="courses-hero-subtitle">
              Browse 25+ ECTS-accredited programs across 5 top Albanian universities.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="courses-search-bar"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search courses or universities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button
              className="filter-toggle-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              Filters
              {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            className="filters-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container">
              <div className="filters-grid">
                <div className="filter-group">
                  <label>Field of Study</label>
                  <div className="filter-chips">
                    {fields.map(f => (
                      <button
                        key={f}
                        className={`filter-chip ${selectedField === f ? 'active' : ''}`}
                        onClick={() => setSelectedField(f)}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="filter-group">
                  <label>Level</label>
                  <div className="filter-chips">
                    {levels.map(l => (
                      <button
                        key={l}
                        className={`filter-chip ${selectedLevel === l ? 'active' : ''}`}
                        onClick={() => setSelectedLevel(l)}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="filter-group">
                  <label>University</label>
                  <div className="filter-chips">
                    {universities.map(u => (
                      <button
                        key={u}
                        className={`filter-chip ${selectedUni === u ? 'active' : ''}`}
                        onClick={() => setSelectedUni(u)}
                      >
                        {u === 'All' ? 'All Universities' : u}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {activeFilterCount > 0 && (
                <button className="clear-filters" onClick={clearFilters}>
                  <X size={14} /> Clear all filters
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <section className="courses-listing section-padding">
        <div className="container">
          <div className="courses-results-header">
            <p className="results-count">
              Showing <strong>{filtered.length}</strong> of {allCourses.length} programs
            </p>
          </div>

          {filtered.length === 0 ? (
            <motion.div className="no-results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <BookOpen size={48} />
              <h3>No programs found</h3>
              <p>Try adjusting your search or filters.</p>
              <button className="btn btn-primary" onClick={clearFilters}>Clear Filters</button>
            </motion.div>
          ) : (
            <motion.div
              className="courses-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {filtered.map((course) => (
                <motion.div 
                  key={course.id} 
                  className="course-card glass-card-premium" 
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                >
                  {/* Top Accent */}
                  <div className="course-card-accent" style={{ background: levelColors[course.level]?.color || '#D4A017' }} />

                  {course.popular && <div className="popular-badge"><Star size={12} /> Popular</div>}

                  <div className="course-card-body">
                    {/* Level Badge */}
                    <span className="course-level" style={{
                      background: levelColors[course.level]?.bg,
                      color: levelColors[course.level]?.color
                    }}>
                      {course.level}
                    </span>

                    <h3 className="course-name" style={{ color: 'white' }}>{course.name}</h3>

                    <div className="course-uni" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <MapPin size={14} />
                      <span>{course.university}</span>
                    </div>

                    <p className="course-desc" style={{ color: 'rgba(255,255,255,0.6)' }}>{course.description}</p>

                    <div className="course-meta" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      <div className="meta-item">
                        <Clock size={14} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="meta-item">
                        <BookOpen size={14} />
                        <span>{course.field}</span>
                      </div>
                      <div className="meta-item">
                        <DollarSign size={14} />
                        <span>{course.tuition}</span>
                      </div>
                    </div>
                  </div>

                  <div className="course-card-footer">
                    <button className="btn btn-primary course-apply-btn">
                      Apply Now <ArrowRight size={16} />
                    </button>
                    <button className="course-enquiry-btn">
                      <MessageCircle size={16} /> Enquire
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
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
            Need Help Choosing a Course?
          </motion.h2>
          <motion.p
            style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '1.1rem', position: 'relative', zIndex: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our expert counsellors will guide you to the perfect program based on your career goals.
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
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
