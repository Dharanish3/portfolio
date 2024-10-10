import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE - Mechanical Engineering"
            subTitle="Anna University (2018 - 2022)"
            result="8.6/10"
          />
          <ResumeCard
            title="HSC"
            subTitle="SKV Matric School (2016 - 2018)"
            result="86.5/100"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Holy Angels Matric School (2015 - 2016)"
            result="96.4/100"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Certification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Development"
            subTitle="Udemy - (2022 - 2023)"
            result="USA"
          />
          <ResumeCard
            title="Phthon Advanced Programming"
            subTitle="IIT - (2023 - 2024)"
            result="MALAYSIA"
           />
          <ResumeCard
            title="UX Foundation"
            subTitle="Google - (Jan 2023 - Apr 2023)"
            result="Oman"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
