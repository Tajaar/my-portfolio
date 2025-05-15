import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  const colors = [
    'rgba(176, 38, 255, 0.5)',  // purple
    'rgba(212, 175, 55, 0.5)',  // gold
    'rgba(176, 38, 255, 0.3)',  // light purple
    'rgba(212, 175, 55, 0.3)',  // light gold
  ];

  const createParticles = (canvas: HTMLCanvasElement) => {
    const particleCount = Math.floor(canvas.width * canvas.height / 15000);
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  };

  const updateParticles = (canvas: HTMLCanvasElement) => {
    particles.current.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Boundary check and reposition
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
    });
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    particles.current.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    updateParticles(canvas);
    drawParticles(ctx);
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    particles.current = [];
    createParticles(canvas);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    createParticles(canvas);
    animate();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
    />
  );
};

export default ParticleBackground;