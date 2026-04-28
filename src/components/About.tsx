import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Laravel (PHP)', 'NestJS (TypeScript)', 'MySQL', 'REST API'] },
    { category: 'Infrastruktur', items: ['Linux Mint', 'WSL 2', 'Git', 'Systemd/Otomasi'] },
  ];

  return (
    <section id="about" style={{ padding: '100px 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          Tentang <span className="text-gradient-primary">Saya</span>
        </h2>
        
        <div className="glass-luxury" style={{ padding: '3rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#a1a1aa', marginBottom: '3rem', textAlign: 'center' }}>
            Saya Miftah, seorang full-stack web developer dan lulusan dari <span style={{ color: '#fff', fontWeight: 600 }}>SMK Nurul Islam Affandiyah</span>. 
            Saya memiliki dedikasi tinggi dalam membangun aplikasi yang skalabel dan berperforma tinggi. 
            Fokus utama saya adalah menciptakan solusi digital yang elegan—mulai dari arsitektur backend yang kompleks dengan 
            <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}> Laravel & NestJS</span> hingga antarmuka modern yang responsif menggunakan 
            <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}> React</span>. Saya sangat menyukai presisi, otomasi, dan optimalisasi alur kerja 
            di lingkungan <span style={{ color: '#fff', fontWeight: 600 }}>Linux Mint & WSL 2</span>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{skillGroup.category}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {skillGroup.items.map((item) => (
                    <li key={item} style={{ marginBottom: '0.5rem', color: '#e5e7eb', fontSize: '0.95rem' }}>
                      <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>✦</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;