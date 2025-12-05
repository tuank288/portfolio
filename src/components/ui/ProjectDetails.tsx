import { motion } from "motion/react";
import type { IconType } from "react-icons/lib";

interface ProjectDetailsProps {
  title: string;
  description: string;
  subDescription?: string[];
  image: string;
  tags: {
    id: number;
    name: string;
    path?: string;
    icon?: IconType;
  }[];
  href?: string;
  closeModal: () => void;
}

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  closeModal,
}: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl shadow-sm bg-linear-to-l from-midnight to-navy"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 top-5 right-5 bg-midnight hover:bg-blue-950 bg-gray-500 cursor-pointer"
        >
          <img src="assets/icons/close.svg" className="w-6 h-6" />
        </button>
        <div className="w-full h-[90vh] overflow-y-auto custom-scrollbar rounded-l-lg">
          <img src={image} alt={title} className="w-full" />
          <div className="p-5 bg-[linear-gradient(90deg,rgba(46,43,69,0.95)_0%,rgba(29,29,66,1)_100%)] ">
            <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
            <p className="mb-3 font-normal text-neutral-400">{description}</p>
            {subDescription?.map((subDesc) => (
              <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
            ))}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-3">
                {tags.map((tag) => {
                  const IconComponent = tag.icon;
                  return (
                    <div key={tag.id}>
                      {IconComponent ? (
                        <IconComponent className="rounded-lg size-10 hover-animation" />
                      ) : (
                        <img
                          src={tag.path}
                          alt={tag.name}
                          className="rounded-lg size-10 hover-animation"
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
