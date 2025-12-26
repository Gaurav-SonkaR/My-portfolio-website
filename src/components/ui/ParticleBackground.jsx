import React, { useEffect, useRef } from 'react';

class Particle {
  constructor(canvas, color) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 1.0;
    this.vy = (Math.random() - 0.5) * 1.0;
    this.size = Math.random() * 2 + 1;
    this.color = color; // ✅ FIX: assign color
  }

  update(canvas) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const ParticleBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const connectionDistance = 150;

    // 🎨 Vibrant Colors
    const colors = darkMode
      ? ['#60A5FA', '#34D399', '#A78BFA', '#F472B6', '#FBBF24']
      : ['#2563EB', '#059669', '#7C3AED', '#DB2777', '#D97706'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = Array.from({ length: 80 }, () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return new Particle(canvas, color);
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🔗 Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;

            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );

            gradient.addColorStop(0, particles[i].color);
            gradient.addColorStop(1, particles[j].color);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.globalAlpha = opacity * 0.3;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            ctx.globalAlpha = 1;
          }
        }
      }

      // ✨ Update & draw particles
      particles.forEach(p => {
        p.update(canvas);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticleBackground;
