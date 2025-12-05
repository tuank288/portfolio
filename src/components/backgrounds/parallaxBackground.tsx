import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const meteoriteY = useTransform(x, [0, 0.5], ["0%", "70%"]);

  return (
    <section id="paraxallax" className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/images/galaxy.png)",
            backgroundPosition: "right",
            backgroundSize: "cover",
            filter: "brightness(2)",

          }}
        />
        {/* Mountaine Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            backgroundImage: "url(/assets/images/meteorite.png)",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            y: meteoriteY,
          }}
        />
        <div className="glow"></div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
