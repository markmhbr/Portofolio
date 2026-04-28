import { motion } from 'framer-motion';
import { SiReact, SiVuedotjs, SiNestjs, SiLaravel, SiTypescript, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  { name: 'React', level: 'Advanced', color: '#61DAFB', icon: <SiReact /> },
  { name: 'Vue.js', level: 'Intermediate', color: '#4FC08D', icon: <SiVuedotjs /> },
  { name: 'Nest.js', level: 'Intermediate', color: '#E0234E', icon: <SiNestjs /> },
  { name: 'Laravel', level: 'Advanced', color: '#FF2D20', icon: <SiLaravel /> },
  { name: 'TypeScript', level: 'Advanced', color: '#3178C6', icon: <SiTypescript /> },
  { name: 'TailwindCSS', level: 'Advanced', color: '#06B6D4', icon: <SiTailwindcss /> }
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '80px 2rem' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
            Keahlian <span className="text-gradient-primary">Teknis</span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: skill.color }}
                style={{ 
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)',
                  cursor: 'default'
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '1rem', 
                  color: skill.color 
                }}>
                  {skill.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{skill.name}</h3>
                <p style={{ color: '#888', fontSize: '0.85rem' }}>{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;