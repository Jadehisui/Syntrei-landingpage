import { motion } from "framer-motion";

interface GeometricShapesProps {
  variant?: "default" | "sparse" | "dense";
}

const GeometricShapes = ({ variant = "default" }: GeometricShapesProps) => {
  const shapes = [
    // Rotating square top-right
    {
      type: "square",
      className: "top-20 right-10 w-32 h-32 border-4 border-primary/20",
      animation: { rotate: [0, 90, 180, 270, 360], scale: [1, 1.05, 1] },
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
      breathingTransition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
    // Floating rectangle bottom-left
    {
      type: "rectangle",
      className: "bottom-40 left-10 w-20 h-32 bg-accent/10",
      animation: { y: [0, -20, 0], rotate: [0, 5, 0], scale: [1, 1.1, 1] },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      breathingTransition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
    // Pulsing circle center-left
    {
      type: "circle",
      className: "top-1/3 left-[5%] w-24 h-24 rounded-full border-4 border-secondary/30",
      animation: { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] },
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
    // Diamond shape bottom-right
    {
      type: "diamond",
      className: "bottom-1/4 right-[10%] w-16 h-16 bg-primary/10",
      animation: { rotate: [45, 135, 225, 315, 405], scale: [1, 1.08, 1] },
      transition: { duration: 15, repeat: Infinity, ease: "linear" },
      initialRotate: 45,
      breathingTransition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
    // Triangle (using border trick) top-left
    {
      type: "triangle",
      className: "top-[15%] left-[15%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-accent/20",
      animation: { y: [0, -15, 0], rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] },
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      breathingTransition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
    // Large outline square bottom-center
    {
      type: "square-outline",
      className: "bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 border-2 border-border/20",
      animation: { rotate: [0, -360], scale: [1, 1.1, 1] },
      transition: { duration: 30, repeat: Infinity, ease: "linear" },
      breathingTransition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
    },
    // Small filled square floating
    {
      type: "small-square",
      className: "top-1/2 right-[20%] w-8 h-8 bg-secondary/30",
      animation: { y: [0, -30, 0], x: [0, 10, 0], scale: [1, 1.2, 1] },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
      breathingTransition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
    // Cross shape
    {
      type: "cross",
      className: "top-[60%] left-[8%] w-12 h-3 bg-accent/15",
      animation: { rotate: [0, 180, 360], scale: [1, 1.1, 1] },
      transition: { duration: 12, repeat: Infinity, ease: "linear" },
      breathingTransition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  ];

  const getVisibleShapes = () => {
    switch (variant) {
      case "sparse":
        return shapes.filter((_, i) => i % 3 === 0);
      case "dense":
        return shapes;
      default:
        return shapes.filter((_, i) => i % 2 === 0);
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {getVisibleShapes().map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute hidden lg:block ${shape.className}`}
          animate={shape.animation}
          transition={shape.transition}
          initial={{ rotate: shape.initialRotate || 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      ))}
      
      {/* Cross vertical part */}
      {variant !== "sparse" && (
        <motion.div
          className="absolute top-[60%] left-[8%] w-3 h-12 bg-accent/15 hidden lg:block"
          style={{ transform: "translateX(4.5px) translateY(-4.5px)" }}
          animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
};

export default GeometricShapes;
