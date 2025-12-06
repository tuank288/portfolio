import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const About = React.memo(() => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <section id="about" ref={ref}>
            <div className="max-w-7xl mx-auto pt-20 c-space overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-heading">About Me</h2>
                </motion.div>
                {
                    isMobile
                        ? (
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2 }}
                                className="relative pt-10 md:pt-20"
                            >
                                <motion.img className="w-full border rounded-3xl border-accent-foreground aspect-square" src="/assets/images/work.png" />
                                <motion.div className="absolute z-10 bottom-0 p-1 md:p-4 bg-linear-90 from-black/90 via-black/40 to-transparent w-full rounded-b-3xl">
                                    <motion.p
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5 }}
                                        className="text-sm md:text-base lg:text-lg md:leading-relaxed text-neutral-300 font-medium"
                                    >
                                        2+ years of hands-on experience in Angular, Vendure Headless Commerce, and Node.js.
                                        Skilled in developing high-performance, scalable web applications with a strong commitment to advancing into a Senior Fullstack Engineer role by expanding expertise in both front-end and back-end technologies.
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        )
                        : (
                            <div className="grid md:grid-cols-2 gap-2 md:gap-x-8 lg:gap-x-12 pt-10 md:pt-20">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-6 row-span-2"
                                >
                                    <motion.img className="w-full border rounded-3xl border-accent-foreground aspect-square" src="/assets/images/work.png" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.5 }}
                                >
                                    <p className="text-sm md:text-base lg:text-lg leading-relaxed text-neutral-400 font-medium">
                                        2+ years of hands-on experience in Angular, Vendure Headless Commerce, and Node.js.
                                        Skilled in developing high-performance, scalable web applications with a strong commitment to advancing into a Senior Fullstack Engineer role by expanding expertise in both front-end and back-end technologies.
                                    </p>
                                </motion.div>
                                <div className="grid grid-cols-2 text-center gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: -70 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.6 }}
                                        className="flex flex-col justify-center items-center 
                                            border-2 rounded-2xl p-3.5 
                                            max-w-[120px] lg:max-w-[150px] aspect-square
                                            border-purple-500/30
                                            bg-neutral-900/40
                                            transition-all duration-300
                                            hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20"
                                    >
                                        <p className="text-xl font-bold md:text-lg text-neutral-300">4+</p>
                                        <p className="md:text-base text-neutral-400">Projects</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 70 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.7 }}
                                        className="flex flex-col justify-center items-center border-2 rounded-2xl p-3.5 max-w-[120px] lg:max-w-[150px] aspect-square border-cyan-500/30 bg-neutral-900/40 transition-all duration-300
                                        hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                                    >
                                        <p className="text-xl font-bold md:text-lg text-neutral-300">2+</p>
                                        <p className="md:text-base text-neutral-400">Years Exp</p>
                                    </motion.div>
                                </div>
                            </div>
                        )
                }
            </div>
        </section>
    );
});

export default About;
