import { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trailParticles, setTrailParticles] = useState([]);
  const cursorRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Smooth cursor movement with interpolation
      const updateCursor = () => {
        const dx = clientX - cursorRef.current.x;
        const dy = clientY - cursorRef.current.y;
        
        cursorRef.current.x += dx * 0.15;
        cursorRef.current.y += dy * 0.15;
        
        setMousePos({ x: cursorRef.current.x, y: cursorRef.current.y });
        
        if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
          animationFrameRef.current = requestAnimationFrame(updateCursor);
        }
      };
      
      updateCursor();

      // Create trail particles at actual mouse position
      const particle = {
        id: `particle-${particleId++}-${Date.now()}`,
        x: clientX,
        y: clientY,
        size: Math.random() * 40 + 60, // 60-100px
        opacity: 0.4,
        blur: Math.random() * 20 + 30, // 30-50px blur
        createdAt: Date.now()
      };

      setTrailParticles(prev => [...prev.slice(-8), particle]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particle cleanup and fade out
    const fadeInterval = setInterval(() => {
      const now = Date.now();
      setTrailParticles(prev =>
        prev
          .map(p => ({
            ...p,
            opacity: Math.max(0, p.opacity - 0.02)
          }))
          .filter(p => p.opacity > 0 && (now - p.createdAt) < 2000)
      );
    }, 30);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(fadeInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Trail particles with smooth fade */}
      {trailParticles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9997] rounded-full transition-opacity duration-300"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 40%, transparent 70%)',
            opacity: particle.opacity,
            filter: `blur(${particle.blur}px)`,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'screen'
          }}
        />
      ))}

      {/* Main cursor glow - large soft halo */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full transition-all duration-200 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
          opacity: 0.5,
          mixBlendMode: 'screen'
        }}
      />

      {/* Secondary glow - medium intensity */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full transition-all duration-150 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(20px)',
          opacity: 0.6,
          mixBlendMode: 'screen'
        }}
      />

      {/* Core cursor - bright center */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-all duration-100 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '12px',
          height: '12px',
          background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, transparent 100%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(2px)',
          opacity: 0.9,
          boxShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)',
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
};
