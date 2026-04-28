import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import dapurGiungImg from '../assets/images/dapurgiung.png';
import spmbImg from '../assets/images/spmb.png';


const projectsData = [
  {
    title: 'Dapur Giung',
    description: 'Platform katalog menu digital untuk Dapur Giung. Memudahkan pelanggan melihat daftar hidangan, deskripsi, dan harga secara online dengan tampilan yang responsif.',
    tech: ['Laravel', 'Boostrap', 'MySQL'],
    image: dapurGiungImg,
    repo: 'https://github.com/markmhbr',
    demo: 'https://dapurgiung.com'
  },
  {
    title: 'Aplikasi Manajemen Sekolah',
    description: 'Sistem informasi sekolah untuk mengelola data siswa, guru, dan nilai. Proyek tugas akhir SMK Jurusan RPL.',
    tech: ['Laravel', 'Bootstrap', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop',
    repo: 'https://github.com/markmhbr/simak',
    demo: 'https://smakniscjr.sch.id'
  },
  {
    title: 'PPDB Online',
    description: 'Sistem pendaftaran mahasiswa baru berbasis web yang dirancang untuk menyederhanakan proses registrasi calon mahasiswa baru. Sistem ini mencakup fitur formulir pendaftaran online, validasi data, unggah dokumen, hingga dashboard administrasi untuk verifikasi dan rekapitulasi data pendaftar.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
    image: spmbImg,
    repo: 'https://github.com/markmhbr',
    demo: 'https://smakniscjr.sch.id'
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '80px 2rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
            Proyek <span className="text-gradient-primary">Terbaik</span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ borderRadius: '1.5rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tech.map(t => (
                      <span key={t} style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                      <Code size={16} /> Kode
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-luxury" style={{ background: 'var(--accent-primary)', color: 'black' }}>
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;