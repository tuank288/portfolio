import { Timeline } from "@/components/common/Timeline";
import { experiences } from "@/constants";
import React from "react";

const Experiences = React.memo(() => {

  return (
    <section id="experiences">
      <div className="max-w-7xl mx-auto pt-20 c-space">
        <Timeline data={experiences} />
      </div>
    </section>
  );
});
export default Experiences;
