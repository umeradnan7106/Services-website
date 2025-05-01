import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "bottom";
  duration?: number;
}

const SlideIn: React.FC<SlideInProps> = ({ children, direction = "left", duration = 1 }) => {
  const variants = {
    left: { x: "-50%", opacity: 0 },
    right: { x: "50%", opacity: 0 },
    up: { y: "-50%", opacity: 0 },
    bottom: { y: "50%", opacity: 0 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of it is visible
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
