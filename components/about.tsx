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
      <p className="mb-3">
       In 2020, I transitionend from a career as a {" "}
        <span className="font-medium">executive coordinator</span>{" "} into web development, and I havent looked back since. 2023 I decided to enroll Technigo bootcamp and leverage my skills into the leading technologies on the market. After graduation I started building on my portfolio, my tech stack and my passion for code. {" "} <br /> I have my freelance business "NextEdit Tech Solutions", focusing on building accessible and beautiful designs and handcoded websites for small businesses and startups. My background in education and accessibility compliance, has provided me with a deep understanding for web accessibility as a developer. I keep investing in my interest and earned several certificates within{" "} <span className="font-medium">web accessibility standards</span>{" "} and{" "} <span className="font-medium">UX-design</span>{" "}. In my freelance developer toolkit I provide accessibility audits as well as hands-on tips in how to improve code and UX/UI to be compliant to WCAG and WAI-ARIA standards. 
      </p> <p> 
        React, Next.js, Node.js, and MongoDB is where I find myself most of the times. TypeScript/JavaScript is my first coding language. 
        TypeScript/JavaScript is my first coding language. React and Next.js is where I find myself most of the times. Values I always bring to my practice is to make the code accessible for <span className="fint-medium">everyone</span>. I love combining my intrest in the latest design trends, keep playfulness and innovative edge yet making sure the design is accessible for anyone to use.</p> 
     
      
    </motion.section>
  );
}
