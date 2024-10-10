import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="About" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="App Developement"
          des=" Build a scalable web apps using React, Node.js, and PHP, specializing in e-commerce and ERP systems. I create secure, high-performance solutions with a focus on user-friendly designs."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Web Development"
          des=" Web developement with expertise in building responsive, SEO-optimized websites using React, Node.js, and PHP. I create user-centric designs that ensure seamless performance across devices and search engines."
          icon={<FaGlobe />}
        />
        <Card
          title="UX Researcher"
          des="Leveraged data-driven insights to analyze business needs, facilitating effective decision-making and optimizing user experience across applications."
          icon={<SiAntdesign />}
        />
        {/* <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        /> */}
      </div>
    </section>
  );
}

export default Features