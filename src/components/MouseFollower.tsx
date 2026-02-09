import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const MouseFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed w-16 h-16 bg-primary/20 rounded-full pointer-events-none z-50 backdrop-blur-sm"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: -32,
        translateY: -32,
      }}
    />
  );
};

export default MouseFollower;
