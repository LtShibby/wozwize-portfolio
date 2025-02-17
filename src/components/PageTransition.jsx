import { motion } from 'framer-motion';

const slideVariants = {
  initial: { 
    opacity: 0, 
    x: -100,
  },
  animate: { 
    opacity: 1, 
    x: 0,
  },
  exit: { 
    opacity: 0, 
    x: 100,
  }
};

const fadeVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0
  },
  exit: { 
    opacity: 0,
    y: -20
  }
};

const scaleVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0
  },
  exit: { 
    opacity: 0, 
    scale: 1.1,
    y: -20
  }
};

const PageTransition = ({ children, variant = "fade" }) => {
  const variants = {
    slide: slideVariants,
    fade: fadeVariants,
    scale: scaleVariants
  }[variant];

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="pt-20"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 