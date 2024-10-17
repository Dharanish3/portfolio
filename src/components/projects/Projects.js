import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Responsive UI Website"
          des="Created a responsive web application using React and Tailwind CSS, ensuring seamless performance across various devices and screen sizes. Employed modern design principles to enhance user engagement and accessibility."
          src={projectOne}
          githubLink="https://github.com/Dharanish3/Brainwave"
          siteLink="https://guileless-griffin-607775.netlify.app/"
        />
        <ProjectsCard
          title="E-commerce"
          des="Developed a comprehensive online marketplace platform with
seamless integration of both backend and frontend features for a
superior shopping experience.
Designed and implemented a robust database to efficiently
manage product inventory and user data.
"
          src={projectTwo}
          githubLink="https://github.com/Dharanish3/shopy"
          siteLink="https://grand-figolla-d33887.netlify.app/"
        />
        <ProjectsCard
          title="Booking App"
          des=" Developed a user-friendly movie booking application featuring a streamlined interface for easy navigation and integrated email functionality for booking confirmations and updates. Utilized modern web technologies to enhance user experience and ensure reliable communication."
          src={projectThree}
          githubLink="https://github.com/Dharanish3/Booking-App"
          siteLink="https://mellifluous-sawine-545b81.netlify.app/"
        />
        <ProjectsCard
          title="Library Management System"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          githubLink="https://github.com/Dharanish3/library"
          siteLink="https://benevolent-kulfi-55e36a.netlify.app"
        />
        <ProjectsCard
          title="Authetication"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          githubLink="https://github.com/Dharanish3/user-list-"
          siteLink="https://grand-llama-c2f21c.netlify.app/"
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          githubLink=""
          siteLink=""
        /> */}
      </div>
    </section>
  );
}

export default Projects