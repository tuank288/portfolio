import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }: { data: any[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemH2Ref = useRef(null);
  const isInView = useInView(itemH2Ref, { once: true, amount: 0.3 });
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef}>
      <motion.div
        ref={itemH2Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-heading" > My Work Experience</h2>
      </motion.div>
      <div ref={ref} className="relative pb-10">
        {data.map((item, index) => {
          const itemRef = useRef(null);
          const itemInView = useInView(itemRef, { once: true, amount: 0.3 });

          return (
            <motion.div
              key={index}
              ref={itemRef}
              initial={{ opacity: 0, x: -50 }}
              animate={itemInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                  <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
                </div>
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-3xl text-neutral-300">
                  <h3>{item.date}</h3>
                  <h3 className="text-2xl text-neutral-400">{item.title}</h3>
                  <h3 className="text-2xl text-neutral-500">{item.job}</h3>
                </div>
              </div>

              <div className="relative w-full pl-10 pr-4 md:pl-4">
                <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden ">
                  <h3>{item.date}</h3>
                  <h3>{item.job}</h3>
                </div>
                {item.contents.map((content: string, index: number) => (
                  <p className="mb-3 font-normal text-neutral-400" key={index}>
                    {content}
                  </p>
                ))}
              </div>
            </motion.div>
          )
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-0.5 bg-linear-to-t from-purple-500 via-lavender/50 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div >
  );
};
