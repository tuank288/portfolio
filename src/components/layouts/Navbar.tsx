import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const Navbar = React.memo(() => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = useMemo(() => ['About', 'Skills', 'Projects', 'Experiences', 'Contact'], []);

    const scrollToSection = useCallback((id: string) => {
        setIsOpen(false);
        setTimeout(() => {
            document.getElementById(id.toLowerCase())?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 0);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'backdrop-blur-xl border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto c-space">
                <div className="flex justify-between items-center h-16">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        src="/assets/logos/logo.png"
                        className="w-28 h-3 md:w-44 md:h-5 cursor-pointer"
                        alt="Logo"
                        onClick={() => scrollToSection("Paraxallax")}
                    />
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <motion.button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white/70 transition-colors cursor-pointer"
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white cursor-pointer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden -lighter border-b border-white/10"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {menuItems.map((item) => (
                                <motion.button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left text-white/70 transition-colors py-2 cursor-pointer"
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
});

export default Navbar;