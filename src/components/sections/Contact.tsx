import { useInView, motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import React, { useState, useCallback, useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../common/Alert";

const Contact = React.memo(() => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'danger'>('idle');

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

    const showAlertMessage = (type: "success" | "danger" | "sending" | "idle", message: string) => {
        setStatus(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
            setStatus('idle');
        }, 50000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            console.log("From submitted:", formData);
            await emailjs.send(
                "service_kcoxgy8",
                "template_vjd5cfh",
                {
                    from_name: formData.name,
                    to_name: "Tuan",
                    from_email: formData.email,
                    to_email: "tuank2882001@gmail.com",
                    message: formData.message,
                },
                "qT3q4T_cmn0fG_tPw"
            );
            setFormData({ name: "", email: "", message: "" });
            showAlertMessage("success", "You message has been sent!");
        } catch (error) {
            setStatus('danger');
            console.log(error);
            showAlertMessage("danger", "Somthing went wrong!");
        }
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    return (
        <section id="contact" ref={ref} className="py-20 px-4 overflow-x-hidden c-space">
            <div className="max-w-4xl mx-auto">
                {showAlert && <Alert type={status} text={alertMessage} />}
                <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-heading">Let's Talk</h2>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-white/80 md:text-lg mb-8">
                            I’m always open to exciting projects and new collaboration opportunities. Feel free to get in touch with me!
                        </p>

                        {[
                            { icon: Mail, text: 'tuank2882001@gmail.com', href: 'mailto:tuank2882001@gmail.com' },
                            { icon: Github, text: 'github.com/tuank288', href: 'https://github.com/tuank288' },
                            { icon: Linkedin, text: 'linkedin.com/in/tuank288', href: 'https://linkedin.com' },
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 glass-effect p-2 md:p-4 rounded-lg border border-white/10 hover:/50 transition-all group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="text-white" size={24} />
                                </div>
                                <span className="text-white/80 group-hover:text-white transition-colors">
                                    {item.text}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="mb-5">
                            <label htmlFor="name" className="field-label">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Tuan K"
                                className="field-input field-input-focus" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="name" className="field-label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="tuank2882001@gmail.com"
                                className="field-input field-input-focus"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="name" className="field-label">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Share your thoughts..."
                                className="field-input field-input-focus resize-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={!isFormValid || status === 'sending'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-8 py-4 bg-linear-to-t from-cyan-300 to-blue-500 cursor-pointer rounded-lg text-white font-semibold shadow-lg shadow-primary/50 hover:shadow-primary/80 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
});

export default Contact;