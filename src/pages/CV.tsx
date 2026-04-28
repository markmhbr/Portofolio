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
    <div style={{ background: '#f3f4f6', minHeight: '100vh', color: '#111827', padding: '2rem 1rem', fontFamily: "'Inter', sans-serif" }}>
      {/* Navbar - Tersembunyi saat Cetak */}
      <nav className="container no-print" style={{ position: 'relative', zIndex: 100, marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '900px', margin: '0 auto 2rem auto' }}>
        <Link to="/" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4b5563', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#111827'} onMouseOut={(e) => e.currentTarget.style.color = '#4b5563'}>
          <ArrowLeft size={20} />
          <span>Kembali ke Portofolio</span>
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={handlePrint} 
            style={{ 
              cursor: 'pointer', 
              padding: '0.6rem 1.5rem', 
              fontSize: '0.85rem', 
              border: 'none', 
              borderRadius: '0.5rem', 
              background: '#111827', 
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Printer size={16} />
            Cetak CV
          </button>
        </div>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container cv-card"
        style={{ 
          background: '#ffffff', 
          borderRadius: '0', 
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          color: '#111827'
        }}
      >
        {/* Bagian Header */}
        <header style={{ padding: '4rem 3rem', background: '#f9fafb', borderBottom: '2px solid #111827', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', alignItems: 'flex-end' }}>
            <div>
              <div style={{ background: '#111827', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '0.2rem', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block', marginBottom: '1rem' }}>
                Siap Bekerja
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3rem)', fontWeight: 800, margin: 0, fontFamily: 'Outfit', lineHeight: 1, color: '#111827' }}>
                Miftah <span style={{ color: '#d4af37' }}>Alfa Reza</span>
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', marginTop: '1rem', fontWeight: 400, maxWidth: '550px' }}>
                Full-Stack Developer spesialis dalam membangun <span style={{ color: '#111827', fontWeight: 600 }}>arsitektur performa tinggi</span> and <span style={{ color: '#111827', fontWeight: 600 }}>pengalaman pengguna premium</span>.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.8rem', fontSize: '0.9rem', color: '#4b5563', borderLeft: '2px solid #d4af37', paddingLeft: '1.5rem' }}>
              <a href="mailto:miftah@example.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'inherit', textDecoration: 'none' }}>
                <Mail size={16} color="#d4af37" /> miftah@example.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={16} color="#d4af37" /> Indonesia
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <FaGithub size={18} color="#111827" />
                <FaLinkedin size={18} color="#111827" />
                <FaInstagram size={18} color="#111827" />
              </div>
            </div>
          </div>
        </header>

        <div className="grid-container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Kolom Konten Utama */}
          <div className="main-col" style={{ padding: '3rem', borderRight: '1px solid #e5e7eb' }}>
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111827', marginBottom: '1.5rem', borderBottom: '2px solid #f3f4f6', paddingBottom: '0.5rem' }}>
                <Briefcase size={18} color="#d4af37" />
                Profil Profesional
              </h2>
              <p style={{ lineHeight: 1.7, color: '#374151', fontSize: '1rem' }}>
                Full-Stack Developer yang berdedikasi dengan keahlian mendalam dalam ekosistem web modern. 
                Memiliki kemampuan terbukti dalam merancang dan mengimplementasikan sistem backend yang kompleks menggunakan <b>Laravel & NestJS</b>, 
                yang terintegrasi secara mulus dengan antarmuka <b>React</b> berperforma tinggi. 
                Berfokus pada presisi, kode yang bersih, dan alur kerja otomatis di lingkungan berbasis Linux.
              </p>
            </section>

            <section>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111827', marginBottom: '1.5rem', borderBottom: '2px solid #f3f4f6', paddingBottom: '0.5rem' }}>
                <Award size={18} color="#d4af37" />
                Proyek Unggulan
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { name: 'Luxury Architecture Portfolio', tech: 'React / Framer Motion', desc: 'Showcase digital kelas atas dengan efek glassmorphism tingkat lanjut dan animasi berbasis state.' },
                  { name: 'Enterprise API Gateway', tech: 'Laravel / PostgreSQL', desc: 'Arsitektur REST API yang aman dan skalabel dengan analitik real-time dan pembatasan laju (rate-limiting).' },
                  { name: 'Task Flow Engine', tech: 'NestJS / WebSockets', desc: 'Platform kolaborasi real-time dengan manajemen state terdistribusi.' }
                ].map((project, i) => (
                  <div key={i}>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: '#111827', fontWeight: 700 }}>{project.name}</h4>
                    <p style={{ margin: '0.2rem 0', fontSize: '0.8rem', color: '#d4af37', fontWeight: 600 }}>{project.tech}</p>
                    <p style={{ margin: '0.4rem 0', fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.5 }}>{project.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Kolom Sidebar */}
          <div className="sidebar-col" style={{ padding: '3rem', background: '#fcfcfc' }}>
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111827', marginBottom: '1.5rem', borderBottom: '2px solid #f3f4f6', paddingBottom: '0.5rem' }}>
                <CheckCircle2 size={18} color="#d4af37" />
                Keahlian Teknis
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {skillGroups.map((group) => (
                  <div key={group.name}>
                    <h5 style={{ margin: '0 0 0.8rem 0', fontSize: '0.85rem', color: '#111827', fontWeight: 700 }}>
                      {group.name}
                    </h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {group.items.map(skill => (
                        <span key={skill} className="skill-tag" style={{ padding: '0.3rem 0.6rem', background: '#f3f4f6', borderRadius: '0.2rem', fontSize: '0.75rem', border: '1px solid #e5e7eb', color: '#374151' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111827', marginBottom: '1.5rem', borderBottom: '2px solid #f3f4f6', paddingBottom: '0.5rem' }}>
                <Globe size={18} color="#d4af37" />
                Bahasa
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span>Bahasa Indonesia</span>
                  <span style={{ color: '#d4af37', fontWeight: 600 }}>Asli</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span>Bahasa Inggris</span>
                  <span style={{ color: '#d4af37', fontWeight: 600 }}>Profesional</span>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111827', marginBottom: '1.5rem', borderBottom: '2px solid #f3f4f6', paddingBottom: '0.5rem' }}>
                <GraduationCap size={18} color="#d4af37" />
                Pendidikan
              </h2>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#111827', fontWeight: 700 }}>SMK Nurul Islam Affandiyah</h4>
                <p style={{ margin: '0.2rem 0', fontSize: '0.85rem', color: '#4b5563' }}>Rekayasa Perangkat Lunak</p>
                <p style={{ margin: '0.2rem 0', fontSize: '0.8rem', color: '#d4af37', fontWeight: 600 }}>2023 — 2026</p>
              </div>
            </section>
          </div>

        </div>

        {/* Footer di CV */}
        <footer style={{ padding: '2rem 3rem', borderTop: '1px solid #f3f4f6', textAlign: 'center' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.7rem', margin: 0 }}>
            Dibuat melalui Portofolio Digital • Miftah Alfa Reza • {new Date().getFullYear()}
          </p>
        </footer>
      </motion.div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Inter:wght@400;500;600&display=swap');
          
          @media screen and (max-width: 768px) {
            .cv-card { border-radius: 0 !important; }
            header { padding: 2rem 1.5rem !important; }
            .grid-container { grid-template-columns: 1fr !important; }
            .main-col { border-right: none !important; border-bottom: 1px solid #e5e7eb !important; }
          }

          @page {
            size: A4;
            margin: 0;
          }

          @media print {
            body { 
              background: white !important; 
              color: black !important; 
              padding: 0 !important; 
              margin: 0 !important;
            }
            .no-print { display: none !important; }
            
            .cv-card { 
              background: white !important; 
              color: black !important; 
              border: none !important; 
              box-shadow: none !important; 
              width: 100% !important; 
              max-width: 100% !important;
              border-radius: 0 !important;
              margin: 0 !important;
              padding: 0 !important;
              display: block !important;
            }

            header { 
              background: #f9fafb !important; 
              border-bottom: 2px solid #000 !important; 
              color: black !important; 
              padding: 30px !important; 
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            h2 { 
              color: #000 !important; 
              border-bottom: 1px solid #000 !important; 
              padding-bottom: 5px !important;
              margin-top: 20px !important;
            }

            section { page-break-inside: avoid; }

            .main-col { 
              padding: 20px 30px !important; 
              border-right: 1px solid #eee !important; 
            }
            
            .sidebar-col { 
              padding: 20px 30px !important; 
              background: #fff !important; 
            }

            span, p, h4, h5 { color: black !important; }
            b { color: black !important; font-weight: 700; }
            
            .skill-tag {
              background: #f0f0f0 !important;
              border: 1px solid #ddd !important;
              color: #333 !important;
            }

            footer { 
              padding: 15px !important; 
              border-top: 1px solid #eee !important; 
            }

            * { 
              -webkit-print-color-adjust: exact !important; 
              print-color-adjust: exact !important; 
            }
          }

          .grid-container {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
          }
        `}
      </style>
    </div>
  );
};

export default CV;
