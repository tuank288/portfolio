import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { myProjects } from "@/constants";
import Project from "../ui/Project";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isMobile = useMediaQuery({
    query: "(pointer: coarse) or (max-width: 768px)"
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState<string | null>(null);
  return (
    <section
      id="projects"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto pt-20 c-space relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-heading">Projects</h2>
        </motion.div>

        <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
        {myProjects.map((project, index) => {
          const itemRef = useRef(null);
          const itemInView = useInView(itemRef, { once: true, amount: 0.3 });

          return (
            <motion.div
              key={index}
              ref={itemRef}
              initial={{ opacity: 0, y: -50 }}
              animate={itemInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Project key={project.id} {...project} setPreview={setPreview} />
            </motion.div>
          )
        })}
        {!isMobile && preview && (
          <motion.img
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
            src={preview}
            style={{ x: springX, y: springY }}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
