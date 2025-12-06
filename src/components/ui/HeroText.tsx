import { motion } from "motion/react";
import { TypingAnimation } from "@/components/common/typingAnimation";

const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-[20vh] md:text-left rounded-3xl bg-clip-text w-7xl mx-auto">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex">
        <motion.h1
          className="text-[clamp(1rem,5vw,3.75rem)] font-mono font-extrabold text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Hi I'm Tuan K
        </motion.h1>
        <div className="flex flex-col items-start mt-2.5">
          <motion.p
            className="text-5xl font-mono font-bold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <span>Full-Stack • </span>
            <TypingAnimation loop words={["Angular", "React", "Node.js"]} />
          </motion.p>
        </div>
        <div>
          <motion.p
            className="text-5xl font-mono text-neutral-300 mt-3.5"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>

          <motion.p
            className="text-4xl font-mono text-neutral-300 mt-2.5"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col md:hidden">
        <motion.p
          className="text-3xl font-mono"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Tuan K
        </motion.p>
        <div className="flex flex-col items-start mt-2">
          <motion.p
            className="text-2xl font-mono font-bold text-neutral-300 space-y-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <span>Full-Stack • </span>
            <TypingAnimation loop words={["Angular", "React", "Node.js"]} />
          </motion.p>
        </div>
        <div>
          <motion.p
            className="text-2xl font-mono"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>

          <motion.p
            className="text-2xl font-mono"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
