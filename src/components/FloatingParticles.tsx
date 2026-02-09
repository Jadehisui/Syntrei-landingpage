import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
  size?: number;
}

const FloatingParticles = ({ 
  count = 20, 
  colors = ["#00ff88", "#ff6b6b", "#4ecdc4", "#45b7d1"], 
  size = 4 
}: FloatingParticlesProps) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(generatedParticles);
  }, [count, colors]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: size,
            height: size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;