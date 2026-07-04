import { useEffect, useRef } from 'react';

export default function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Orb parameters: soft floating purple/blue lights
    const orbs = [
      {
        x: width * 0.2,
        y: height * 0.3,
        radius: Math.min(width, height) * 0.35,
        vx: 0.6,
        vy: 0.4,
        color: 'rgba(139, 92, 246, 0.15)', // Violet
      },
      {
        x: width * 0.8,
        y: height * 0.7,
        radius: Math.min(width, height) * 0.4,
        vx: -0.4,
        vy: -0.5,
        color: 'rgba(59, 130, 246, 0.12)', // Blue
      },
      {
        x: width * 0.5,
        y: height * 0.5,
        radius: Math.min(width, height) * 0.3,
        vx: -0.3,
        vy: 0.6,
        color: 'rgba(236, 72, 153, 0.08)', // Pink/Magenta
      },
    ];

    const animate = () => {
      ctx.fillStyle = '#090514'; // Very deep space dark purple
      ctx.fillRect(0, 0, width, height);

      // Draw starry ambient dots (small and faint)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      for (let i = 0; i < 50; i++) {
        // Pseudo-random but static-feeling positions based on index
        const x = ((i * 12345.67) % 1) * width;
        const y = ((i * 76543.21) % 1) * height;
        ctx.fillRect(x, y, 1.5, 1.5);
      }

      // Draw premium floating soft glow gradients with 'screen' composition
      ctx.globalCompositeOperation = 'screen';

      orbs.forEach((orb) => {
        // Move orbs
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce borders
        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        // Radial gradient
        const grad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Restore composite mode
      ctx.globalCompositeOperation = 'source-over';

      // Custom premium grid overlay
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      
      // Vertical grid lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      // Horizontal grid lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="portfolio-ambient-shader"
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none block"
      style={{ background: '#090514' }}
    />
  );
}
