// Background.jsx
import React, { useRef, useEffect } from 'react';
import '../styles/Background.css';

const colors = [
  'rgb(120, 81, 169)',  // Royal Purple
  'rgb(186, 104, 200)', // Orchid Purple
  'rgb(97, 47, 107)',   // Imperial Purple
  'rgb(143, 0, 255)',   // Electric Violet
  'rgb(148, 87, 235)',  // Lavender Indigo
];

const PARTICLE_COUNT = 75;
const MAX_DISTANCE = 150;

class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.baseRadius = radius;
    this.color = color;
    this.velocity = velocity;
    this.glowIntensity = Math.random() * 30 + 30; // Starts higher
    this.glowDirection = Math.random() > 0.5 ? 1 : -1;
    this.rippleRadius = 0;
    this.rippleAlpha = 0;
    this.rippleSpeed = 0.8;

  }
  

  draw(ctx) {
    //glow effect
    ctx.save();
    const pulsedRadius = this.radius + (this.glowIntensity - 30) * 0.03; // subtle size pulse
    ctx.beginPath();
    ctx.arc(this.x, this.y, pulsedRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = this.glowIntensity;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    // Ripple effect
    if (this.rippleAlpha > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.rippleRadius + this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = `rgba(255, 255, 255, ${this.rippleAlpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }
  
  

  update(canvas, mouse) {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x *= -1;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.velocity.y *= -1;
    }
  
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
  
    // Movement influenced by mouse proximity
    if (mouse.x && mouse.y && distance < 100) {
      this.velocity.x += dx * 0.0005;
      this.velocity.y += dy * 0.0005;
  
      // Start ripple effect
      this.rippleRadius += this.rippleSpeed;
      this.rippleAlpha -= 0.01;
  
      if (this.rippleAlpha <= 0) {
        this.rippleRadius = 0;
        this.rippleAlpha = 0.4;
      }
    } else {
      this.rippleRadius = 0;
      this.rippleAlpha = 0;
    }
  
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
  
}

const Background = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Create particles
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const radius = Math.random() * 2 + 1.5;
      const x = Math.random() * width;
      const y = Math.random() * height;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const velocity = {
        x: (Math.random() - 0.5) * 0.8,
        y: (Math.random() - 0.5) * 0.8,
      };
      return new Particle(x, y, radius, color, velocity);
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.current.forEach((p, i) => {
        p.update(canvas, mouse.current);
        p.draw(ctx);

        // connect particles
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[j].x - p.x;
          const dy = particles.current[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.1)'; // Rich Gold color
            ctx.lineWidth = 2;
            ctx.shadowBlur = 6;
            ctx.shadowColor = 'rgb(255, 215, 0)';         
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-bg" />;
};

export default Background;