import { useState, useEffect } from "react";

interface MatrixTextProps {
  text: string;
  className?: string;
}

const MatrixText = ({ text, className }: MatrixTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text);
      return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let iterations = 0;
    const maxIterations = text.length;
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((char, i) => {
        if (i < iterations) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      iterations += 0.5; // Control speed
      if (iterations >= maxIterations) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovering, text]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
};

export default MatrixText;