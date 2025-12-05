import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    SiJavascript, SiReact, SiAngular, SiTailwindcss, SiTypescript, SiFigma, SiMysql, SiGithub, SiNodedotjs, SiPrisma, SiNestjs,
    SiGraphql
} from "react-icons/si";
import { Particles } from "../ui/particles";

const Skill = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const isViewSkill = useInView(ref, { once: false, amount: 0.3 });

    const skills = [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "MySQL", icon: SiMysql },
        { name: "React", icon: SiReact },
        { name: "Angular", icon: SiAngular },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Figma", icon: SiFigma },
        { name: "GitHub", icon: SiGithub },
        { name: "Node.js / Express", icon: SiNodedotjs },
        { name: "Prisma", icon: SiPrisma },
        { name: "NestJs", icon: SiNestjs },
        { name: "GraphQL", icon: SiGraphql },
    ];

    const cssVar = (vars: Record<string, string | number>) => vars as React.CSSProperties;

    useEffect(() => {
        if (!isViewSkill) return;
        const interval = setInterval(() => {
            setActiveIndex(i => (i < skills.length - 1 ? i + 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, [isViewSkill]);

    const activeSkillName = useMemo(() => skills[activeIndex].name, [activeIndex]);
    return (
        <section id="skills" ref={ref}>
            <div className="max-w-7xl mx-auto pt-20 c-space">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-heading text-white">Skills</h2>
                </motion.div>
                <div className="relative">
                    <Particles
                        className="absolute inset-0 -z-50"
                        quantity={100}
                        ease={80}
                        color={"#ffffff"}
                        refresh
                    />
                    <div className="flex justify-center items-center">
                        <div className="banner">
                            <div className="slider" style={cssVar({ '--quantity': skills.length })}>
                                {isViewSkill && skills.map((skill, index) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <div key={index} className="item" style={cssVar({ '--position': index + 1 })}>
                                            <IconComponent className="md:w-12 md:h-12 w-6 h-6" />
                                            <span className="md:text-base text-[10px]">{skill.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="light-beam"></div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    className="info-panel"
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {activeSkillName}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;