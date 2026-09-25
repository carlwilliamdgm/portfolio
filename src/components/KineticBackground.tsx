import React, { useEffect, useRef } from 'react';

export const KineticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic wave parameters
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      time += 0.008;

      // Draw flowing copper / amber wave ribbons
      const numLines = 18;
      ctx.lineWidth = 1.2;

      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const progress = i / numLines;
        const alpha = Math.sin(progress * Math.PI) * 0.18;
        
        // Copper gradient with amber glow
        ctx.strokeStyle = `rgba(226, 135, 67, ${alpha})`;

        const yBase = height * 0.35 + (i - numLines / 2) * 26;

        for (let x = 0; x <= width; x += 18) {
          const dx = x - mouseX;
          const dy = yBase - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - dist / 350) * 45;

          const wave1 = Math.sin(x * 0.003 + time + i * 0.2) * 55;
          const wave2 = Math.cos(x * 0.006 - time * 0.8 + i * 0.1) * 25;
          const y = yBase + wave1 + wave2 - mouseInfluence;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
