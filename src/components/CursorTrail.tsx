import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorTrail = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring Config: Lebih kaku (stiffness tinggi) = lebih responsif
  const springConfig = { damping: 20, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset -10 agar kursor tepat di tengah
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Kursor Diamond Utama */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          backgroundColor: '#38bdf8', // Warna Cyan
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Bentuk Diamond
          pointerEvents: 'none',
          zIndex: 9999,
          x: smoothX,
          y: smoothY,
          boxShadow: '0 0 15px rgba(56, 189, 248, 0.6)', // Efek Glow
        }}
      />
    </>
  );
};

export default CursorTrail;