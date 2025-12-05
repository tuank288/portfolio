import { useEffect, useState } from "react";
import ProjectDetails from "./ProjectDetails";
import type { IconType } from "react-icons/lib";

type ProjectProps = {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  logo: string;
  image: string;
  tags: {
    id: number;
    name: string;
    path?: string;
    icon?: IconType;
  }[];
  setPreview: (value: string | null) => void;
}

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}: ProjectProps) => {
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    if (isHidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isHidden]);
  return (
    <>
      <div
        className="flex-wrap flex items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex flex-wrap gap-5 mt-2 text-sand text-[#f1d692] max-w-[400px]">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/icons/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
