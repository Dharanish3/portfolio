import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2021 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Developer"
            subTitle="Gyanmatrix Technology (Apr 2024 - Present)"
            result="Coimbatore"
            des="In my role, I design and implement scalable solutions that integrate
seamlessly with MySQL databases, ensuring efficient and reliable
software tailored to complex business needs. I manage both frontend and
backend development, including configuring and optimizing nginx. This
approach guarantees a cohesive and robust application infrastructure"
          />
          <ResumeCard
            title="Associate Software Developer"
            subTitle="M8 IT Solutions - (Nov 2022 - Apr 2024)"
            result="Coimbatore"
            des="My role contribution is in product development using React, MUI, PHP,
and Node.js, with a focus on e-commerce and ERP systems. I thrive in
collaborative environments, working closely with cross-functional teams
to deliver innovative and efficient solutions.
"
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Fintechgie (Mar 2021 - N0v 2022)"
            result="Salem"
            des="Develop a dynamic field of web development and UX research, I excel
in crafting user-friendly websites with a keen focus on responsiveness.
My expertise lies in seamlessly integrating PHP backend applications
to enhance the overall functionality and user experience"
          />
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
