import { motion } from 'framer-motion';
import { Mail, FileText, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isCVPage = location.pathname === '/cv';

  // Don't show complex footer on CV page for cleaner printing/viewing
  if (isCVPage) return null;

  return (
    <footer id="contact" style={{ borderTop: '1px solid var(--glass-border)', background: 'linear-gradient(to bottom, #020617, #000)', padding: '6rem 0 2rem 0', marginTop: '4rem' }}>
      <div className="container">
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
            Let's create <span className="text-gradient-gold">something extraordinary.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            I'm currently available for freelance projects and full-time opportunities. Let's build the future together.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:miftah@example.com" className="btn-luxury" style={{ textDecoration: 'none' }}>
              <Send size={18} />
              Get In Touch
            </a>
            <Link to="/cv" className="btn-outline" style={{ textDecoration: 'none' }}>
              <FileText size={18} />
              View My CV
            </Link>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          {/* Brand Col */}
          <div style={{ flex: 1.5 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.2rem', fontFamily: 'Outfit' }}>Miftah Alfa Reza</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Digital Architect & Full-Stack Developer focusing on high-performance web applications and elegant designs.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#10b981', fontSize: '0.85rem', fontWeight: 500 }}>
              <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></div>
              Available for new projects
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <li key={item} style={{ marginBottom: '0.8rem' }}>
                  <a href={`#${item.toLowerCase()}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    {item}
                  </a>
                </li>
              ))}
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/cv" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>CV / Resume</Link>
              </li>
            </ul>
          </div>

          {/* Socials Col */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Socials</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { name: 'LinkedIn', icon: <FaLinkedin size={18} />, url: '#' },
                { name: 'GitHub', icon: <FaGithub size={18} />, url: '#' },
                { name: 'Instagram', icon: <FaInstagram size={18} />, url: '#' }
              ].map((social) => (
                <a key={social.name} href={social.url} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.3s', fontSize: '0.95rem' }} onMouseOver={(e) => {e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateX(5px)';}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateX(0)';}}>
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <Mail size={18} color="var(--accent-gold)" />
                miftah@example.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <MapPin size={18} color="var(--accent-gold)" />
                Indonesia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
          <p style={{ color: '#555', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} Miftah Alfa Reza. All rights reserved.
          </p>
          <p style={{ color: '#555', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Built with <span style={{ color: '#e11d48' }}>❤</span> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
