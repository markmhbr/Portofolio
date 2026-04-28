import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isCVPage = location.pathname === '/cv';

  if (isCVPage) return null;

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/#home' },
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Skills', href: isHome ? '#skills' : '/#skills' },
    { name: 'Projects', href: isHome ? '#projects' : '/#projects' },
  ];

  return (
    <div style={{ position: 'fixed', top: '2rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1000, pointerEvents: 'none' }}>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-luxury"
        style={{
          padding: '0.75rem 2rem',
          borderRadius: '3rem',
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          pointerEvents: 'auto'
        }}
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            whileHover={{ scale: 1.1, color: 'var(--accent-gold)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
          >
            {link.name}
          </motion.a>
        ))}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            to="/cv" 
            style={{ 
              background: 'var(--accent-gold)', 
              color: 'black', 
              padding: '0.4rem 1.2rem', 
              borderRadius: '2rem', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              textDecoration: 'none' 
            }}
          >
            CV
          </Link>
        </motion.div>
      </motion.header>
    </div>
  );
};

export default Header;