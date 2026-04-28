import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap-reverse' }}>
          
          {/* Konten Teks */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ flex: 1, minWidth: '350px' }}
          >
            <motion.p variants={itemVariants} style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '1rem' }}>
              Miftah Alfa Reza
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--accent-primary)', marginLeft: '10px', verticalAlign: 'middle' }}></span>
            </motion.p>
            
            <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Arsitek Digital & <br />
              <span className="text-gradient-primary">Full-Stack Developer</span>
            </motion.h1>

            <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: '#a1a1aa', marginBottom: '2rem', maxWidth: '500px', lineHeight: 1.7 }}>
              Membangun pengalaman digital yang mutakhir. Spesialisasi dalam aplikasi web berperforma tinggi dengan stack modern. Visi Anda, saya wujudkan dengan presisi teknik.
            </motion.p>

            {/* Statistik Cepat */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
              {[ { label: 'Proyek', val: '10+' }, { label: 'Stack', val: 'Full' }, { label: 'Kualitas', val: '100%' } ].map((stat) => (
                <div key={stat.label}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{stat.val}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn-luxury" style={{ padding: '1rem 2rem', cursor: 'pointer', background: 'var(--accent-primary)', color: 'black' }}>Lihat Karya</button>
              <button style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2rem', borderRadius: '2rem', fontWeight: 600, cursor: 'pointer' }}>
                Kontak Saya
              </button>
            </motion.div>
          </motion.div>

          {/* Kotak Profil Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{ 
                position: 'relative',
                width: '320px',
                height: '400px',
                borderRadius: '30px',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                background: 'rgba(56, 189, 248, 0.03)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <div style={{ fontSize: '5rem' }}>👨‍💻</div>
              {/* Kilauan Dekoratif */}
              <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3), transparent 70%)', zIndex: -1 }}></div>
              <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2), transparent 70%)', zIndex: -1 }}></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;