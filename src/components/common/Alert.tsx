import { motion, AnimatePresence } from "framer-motion";
import type { FC } from "react";
type AlertProps = {
  type: string;
  text: string;
};
const Alert: FC<AlertProps> = ({ type, text }) => {
  const alertVarients = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 
                   bottom-5 left-1/2 -translate-x-1/2 
                   sm:bottom-5 sm:left-auto sm:right-5 sm:translate-x-0 
                   max-w-md sm:w-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVarients}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={`p-4 sm:p-5 ${type === "danger" ? "bg-red-800" : "bg-[#925eed7b]"} text-indigo-100 rounded-2xl sm:rounded-full flex flex-col md:flex-row items-center gap-3 shadow-2xl`}>
          <p
            className={`flex rounded-full ${type === "danger" ? "bg-red-500" : "bg-blue-400"
              } uppercase px-2 py-1 text-xs font-semibold shrink-0`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>

          <p className="text-left flex-1 text-sm sm:text-base">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;