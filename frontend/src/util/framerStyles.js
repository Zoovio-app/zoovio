export const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "100vw",
    scale: 1.2,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 3,
};

export const pageStyle = {
  position: "absolute",
};
