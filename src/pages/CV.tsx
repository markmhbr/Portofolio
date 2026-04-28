import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Printer, ArrowLeft, Briefcase, GraduationCap, Code, Layers, CheckCircle2, Award, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  const skillGroups = [
    { name: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], icon: <Code size={18} /> },
    { name: 'Backend', items: ['Laravel', 'Node.js', 'NestJS', 'RESTful API', 'MySQL'], icon: <Layers size={18} /> },
    { name: 'Tools & OS', items: ['Git/GitHub', 'Linux Mint', 'WSL 2', 'Docker', 'Vite'], icon: <Zap size={18} /> },
  ];

  return (
    <div style={{ background: '#020617', minHeight: '100vh', color: '#fff', padding: '2rem 1rem', fontFamily: "'Inter', sans-serif" }}>
      {/* Navbar - Tersembunyi saat Cetak */}
      <nav className="container no-print" style={{ position: 'relative', zIndex: 100, marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto 2rem auto' }}>
        <Link to="/" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a1a1aa', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#a1a1aa'}>
          <ArrowLeft size={20} />
          <span>Kembali ke Portofolio</span>
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={handlePrint} 
            style={{ 
              cursor: 'pointer', 
              padding: '0.7rem 1.8rem', 
              fontSize: '0.9rem', 
              border: 'none', 
              borderRadius: '2rem', 
              background: 'var(--accent-primary)', 
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontWeight: 700,
              boxShadow: '0 10px 20px -5px rgba(56, 189, 248, 0.4)'
            }}
          >
            <Printer size={18} />
            Cetak CV
          </button>
        </div>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container cv-card"
        style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          borderRadius: '2rem', 
          border: '1px solid rgba(255, 255, 255, 0.05)',
          overflow: 'hidden',
          boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.6)',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          color: '#fff',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Bagian Header */}
        <header style={{ padding: '4rem 3.5rem', background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(14, 165, 233, 0.05) 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', alignItems: 'flex-end' }}>
            <div>
              <div style={{ background: 'var(--accent-primary)', color: '#000', padding: '0.4rem 1.2rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block', marginBottom: '1.5rem' }}>
                Siap Bekerja
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 800, margin: 0, fontFamily: 'Outfit', lineHeight: 1 }}>
                Miftah <span className="text-gradient-primary">Alfa Reza</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#a1a1aa', marginTop: '1.2rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.6 }}>
                Full-Stack Developer spesialis dalam membangun <span style={{ color: '#fff' }}>arsitektur performa tinggi</span> dan <span style={{ color: '#fff' }}>pengalaman pengguna premium</span>.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', fontSize: '0.95rem', color: '#a1a1aa', borderLeft: '2px solid var(--accent-primary)', paddingLeft: '2rem' }}>
              <a href="mailto:miftah@example.com" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'inherit', textDecoration: 'none' }}>
                <Mail size={18} color="var(--accent-primary)" /> miftah@example.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <MapPin size={18} color="var(--accent-primary)" /> Indonesia
              </div>
              <div style={{ display: 'flex', gap: '1.2rem', marginTop: '0.5rem' }}>
                <FaGithub size={20} color="#fff" />
                <FaLinkedin size={20} color="#fff" />
                <FaInstagram size={20} color="#fff" />
              </div>
            </div>
          </div>
        </header>

        <div className="grid-container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Kolom Konten Utama */}
          <div className="main-col" style={{ padding: '3.5rem', borderRight: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <section style={{ marginBottom: '4rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', marginBottom: '2rem' }}>
                <Briefcase size={22} />
                Profil Profesional
              </h2>
              <p style={{ lineHeight: 1.8, color: '#d1d5db', fontSize: '1.05rem' }}>
                Full-Stack Developer yang berdedikasi dengan keahlian mendalam dalam ekosistem web modern. 
                Memiliki kemampuan terbukti dalam merancang dan mengimplementasikan sistem backend yang kompleks menggunakan <b>Laravel & NestJS</b>, 
                yang terintegrasi secara mulus dengan antarmuka <b>React</b> berperforma tinggi. 
                Berfokus pada presisi, kode yang bersih, dan alur kerja otomatis di lingkungan berbasis Linux.
              </p>
            </section>

            <section>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', marginBottom: '2rem' }}>
                <Award size={22} />
                Proyek Unggulan
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {[
                  { name: 'Luxury Architecture Portfolio', tech: 'React / Framer Motion', desc: 'Showcase digital kelas atas dengan efek glassmorphism tingkat lanjut dan animasi berbasis state.' },
                  { name: 'Enterprise API Gateway', tech: 'Laravel / PostgreSQL', desc: 'Arsitektur REST API yang aman dan skalabel dengan analitik real-time dan pembatasan laju (rate-limiting).' },
                  { name: 'Task Flow Engine', tech: 'NestJS / WebSockets', desc: 'Platform kolaborasi real-time dengan manajemen state terdistribusi.' }
                ].map((project, i) => (
                  <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid rgba(56, 189, 248, 0.2)' }}>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>{project.name}</h4>
                    <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{project.tech}</p>
                    <p style={{ margin: '0.5rem 0', fontSize: '0.95rem', color: '#a1a1aa', lineHeight: 1.6 }}>{project.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Kolom Sidebar */}
          <div className="sidebar-col" style={{ padding: '3.5rem', background: 'rgba(255, 255, 255, 0.01)' }}>
            <section style={{ marginBottom: '4rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', marginBottom: '2rem' }}>
                <CheckCircle2 size={22} />
                Keahlian Teknis
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {skillGroups.map((group) => (
                  <div key={group.name}>
                    <h5 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#fff', fontWeight: 700 }}>
                      {group.name}
                    </h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {group.items.map(skill => (
                        <span key={skill} className="skill-tag" style={{ padding: '0.4rem 0.8rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '0.5rem', fontSize: '0.8rem', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e5e7eb' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: '4rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', marginBottom: '2rem' }}>
                <Globe size={22} />
                Bahasa
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span>Bahasa Indonesia</span>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Asli</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span>Bahasa Inggris</span>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Profesional</span>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', marginBottom: '2rem' }}>
                <GraduationCap size={22} />
                Pendidikan
              </h2>
              <div style={{ paddingLeft: '1.2rem', borderLeft: '2px solid var(--accent-primary)' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>SMK Nurul Islam Affandiyah</h4>
                <p style={{ margin: '0.3rem 0', fontSize: '0.95rem', color: '#a1a1aa' }}>Rekayasa Perangkat Lunak</p>
                <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>2023 — 2026</p>
              </div>
            </section>
          </div>

        </div>

        {/* Footer di CV */}
        <footer style={{ padding: '2.5rem 3.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
          <p style={{ color: '#555', fontSize: '0.8rem', margin: 0 }}>
            Dibuat melalui Portofolio Digital • Miftah Alfa Reza • {new Date().getFullYear()}
          </p>
        </footer>
      </motion.div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Inter:wght@400;500;600&display=swap');
          
          @media screen and (max-width: 768px) {
            .cv-card { border-radius: 0 !important; }
            header { padding: 2.5rem 1.5rem !important; }
            .grid-container { grid-template-columns: 1fr !important; }
            .main-col { border-right: none !important; border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important; }
            .sidebar-col { padding: 2.5rem 1.5rem !important; }
          }

          @page {
            size: A4;
            margin: 0mm;
          }

          @media print {
            body { 
              background: #fff !important; 
              color: #000 !important; 
              padding: 0 !important; 
              margin: 0 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .no-print { display: none !important; }
            
            .cv-card { 
              background: #fff !important; 
              color: #000 !important; 
              border: none !important; 
              box-shadow: none !important; 
              width: 100vw !important; 
              max-width: 100vw !important;
              min-height: 100vh !important;
              border-radius: 0 !important;
              margin: 0 !important;
              padding: 0 !important;
              display: block !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              backdrop-filter: none !important;
            }

            header { 
              background: #f9fafb !important; 
              border-bottom: 2px solid #000 !important; 
              color: #000 !important; 
              padding: 1cm 1.5cm !important; 
            }

            .text-gradient-primary {
              background: none !important;
              -webkit-text-fill-color: #000 !important;
              color: #000 !important;
            }

            h2 { 
              color: #000 !important; 
              border-bottom: 1px solid #000 !important; 
              padding-bottom: 2mm !important;
              margin-top: 5mm !important;
            }

            section { page-break-inside: avoid; }

            .main-col { 
              padding: 1cm 1.5cm !important; 
              border-right: 1px solid #eee !important; 
            }
            
            .sidebar-col { 
              padding: 1cm 1.5cm !important; 
              background: #fff !important; 
            }

            span, p, h4, h5 { color: #000 !important; }
            b { color: #000 !important; font-weight: 700; }
            
            .skill-tag {
              background: #f3f4f6 !important;
              border: 1px solid #e5e7eb !important;
              color: #000 !important;
            }

            footer { 
              padding: 1cm !important; 
              border-top: 1px solid #eee !important; 
            }
          }

          .grid-container {
            display: grid;
            grid-template-columns: 1.6fr 1fr;
          }
        `}
      </style>
    </div>
  );
};

export default CV;
