"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem]  leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> </SectionHeading>
      <h2 className="text-3xl font-bold mb-3">Frontend to Fullstack</h2>
      <p className="font-medium ">
       In 2020, I transitionend from a career as a
      executive coordinator into web development, and I havent looked back since. 2023 I decided to enroll Technigo bootcamp and leverage my skills into the leading technologies on the market. After graduation I started building on my portfolio, my tech stack and my passion for code. </p>
        <div className="mt-4 mb-4"><p> Currently I am self employed at <span className="italic">NextEdit Tech Solutions,</span> my freelance business where I build accessible and beautiful designs and hand-coded websites for small businesses and startups. </p>
        </div>
        <div className="ml-10 mt-8 mb-8"> <p className="italic font-bold">My background in education and accessibility compliance, has provided me with a deep understanding for web accessibility as a developer. I keep investing in my interest and earned several certificates within
        web accessibility standards and UX-design. In my freelance developer toolkit I provide accessibility audits as well as hands-on tips in how to improve code and UX/UI to be compliant to WCAG and WAI-ARIA standards. 
      </p></div>
      <div className="mt-4 mb-4">
  
        <p> 
        React, Next.js, Node.js, and MongoDB is where I find myself most of the times. 
        TypeScript/JavaScript is my first coding language, React and Next.js is where I find myself most of the times. I naturally expand my tech stack based on the specific problems I need to solve with my code. My primary focus is always on the end user and the future maintainers of the code. I honour <span className="font-bold">best practices</span> to ensure a positive experience for both developers and end user. I love combining my interest in the latest design trends, keep playfulness and innovative edge yet making sure the design is accessible for anyone to use.</p> </div>
     
      
    </motion.section>
  );
}
