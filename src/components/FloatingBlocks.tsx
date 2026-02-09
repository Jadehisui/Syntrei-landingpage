import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface Block {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  rotation: number;
}

interface FloatingBlockProps {
  block: Block;
  smoothMouseX: ReturnType<typeof useSpring>;
  smoothMouseY: ReturnType<typeof useSpring>;
}

const FloatingBlock = ({ block, smoothMouseX, smoothMouseY }: FloatingBlockProps) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const unsubX = smoothMouseX.on("change", (latest) => {
      const xMultiplier = 30 * (block.id % 3 + 1);
      const normalizedX = latest / window.innerWidth;
      setOffset((prev) => ({ ...prev, x: (normalizedX - 0.5) * xMultiplier * 2 }));
    });

    const unsubY = smoothMouseY.on("change", (latest) => {
      const yMultiplier = 20 * (block.id % 2 + 1);
      const normalizedY = latest / window.innerHeight;
      setOffset((prev) => ({ ...prev, y: (normalizedY - 0.5) * yMultiplier * 2 }));
    });

    return () => {
      unsubX();
      unsubY();
    };
  }, [block.id, smoothMouseX, smoothMouseY]);

  return (
    <motion.div
      className="absolute border-4 border-primary/30 bg-secondary/50 backdrop-blur-sm"
      style={{
        left: `${block.x}%`,
        top: `${block.y}%`,
        width: block.size,
        height: block.size,
        x: offset.x,
        y: offset.y,
      }}
      initial={{ opacity: 0, scale: 0, rotate: block.rotation }}
      animate={{
        opacity: 0.6,
        scale: 1,
        rotate: block.rotation,
      }}
      transition={{
        duration: 1,
        delay: block.delay,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          y: [0, -15, 10, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 6 + block.id,
          repeat: Infinity,
          ease: "easeInOut",
          delay: block.delay,
        }}
      />
    </motion.div>
  );
};

const FloatingBlocks = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 30 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const generatedBlocks: Block[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 60 + Math.random() * 120,
      delay: Math.random() * 2,
      rotation: Math.random() * 45 - 22.5,
    }));
    setBlocks(generatedBlocks);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blocks.map((block) => (
        <FloatingBlock
          key={block.id}
          block={block}
          smoothMouseX={smoothMouseX}
          smoothMouseY={smoothMouseY}
        />
      ))}
    </div>
  );
};

export default FloatingBlocks;
