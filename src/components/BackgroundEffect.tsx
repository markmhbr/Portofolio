import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const BackgroundEffect = () => {
  const blobs = [...Array(6)];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  const moveX = useTransform(springX, [-500, 500], [-20, 20]);
  const moveY = useTransform(springY, [-500, 500], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX - window.innerWidth / 2);
      mouseY.set(clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
        zIndex: -1, overflow: 'hidden', pointerEvents: 'none', background: '#0f172a' 
      }}
    >
      {blobs.map((_, i) => (
        <motion.div
          key={i}
          // Menggabungkan gerakan acak dengan parallax mouse
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: '30vw',
            height: '30vw',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)`,
            filter: 'blur(60px)',
            // Menerapkan efek parallax
            x: moveX,
            y: moveY,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffect;