"use client";

import React from "react";
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
      <h2 className="text-3xl font-bold mb-3 text-center">Frontend to Fullstack</h2>
      <p className="font-medium ">
       In 2020, I transitionend from a career as a
      executive coordinator into web development, and I havent looked back since. 2023 I decided to enroll Technigo bootcamp and leverage my skills into the leading technologies on the market. After graduation I started building on my portfolio, my tech stack, and my passion for code. </p>
<hr className="w-10 h-1 mx-auto my-8  bg-pink-600 border-0 rounded md:my-9 dark:bg-cyan-400" />
 <div> <p>My background in education and accessibility compliance, has provided me with a deep understanding for web accessibility as a developer. I keep investing in my interest and earned several certificates within web accessibility standards and UX-design. In my freelance developer toolkit I provide accessibility audits as well as hands-on tips in how to improve code and UX/UI to be compliant to WCAG and WAI-ARIA standards. 
      </p></div>
      <h2 className="text-3xl mt-4 font-bold text-left dark:text-pink-500 text-pink-800">Freelancing developer </h2>
      <hr className="w-10 h-1 mx-auto my-8  bg-pink-600 border-0 rounded md:my-9 dark:bg-cyan-400" />

      <h2 className="text-3xl mt-4 font-bold mb-3 text-right mr-5 text-cyan-800 dark:text-cyan-500">FemTech inspiration </h2>
     

         <div className="mt-4 mb-4"> As a freelancing developer, based in Stockholm, Sweden, I build customized and hand-crafted applications and offer accessibility audits for small to middle size organizations and businesses webpages. Im also a professional <div className="text-2xl text-grey-400 font-bold mb-2 text-center"> BIRTH DOULA</div>, and seek all the opportunity's to combine my two passions in life. At DAYA Innovation Lab, a FemTech incubator, I am currently living that dream. Its amazing getting to be in the hub where innovation and technology really can make life better for so many people. I get amazed by the power of technology and the impact it can have on the world.
        </div>
      <hr className="w-10 h-1 mx-auto my-8 bg-cyan-600 border-0 rounded md:my-12 dark:bg-pink-500" />

      <div className="mt-4 mb-4">
  
        <p> 
        Speaking about tech.. React, Next.js, Node.js, and MongoDB is where I find myself most of the times. 
        TypeScript/JavaScript is my first coding language. I naturally expand my tech stack based on the specific problems I need to solve with my code. My primary focus is always on the end user and the future maintainers of the code. I honour <span className="font-bold">best practices</span> to ensure a positive experience for both developers and end user. I love combining my interest in the latest design trends, keep playfulness and innovative edge yet making sure the design is accessible for anyone to use.</p> </div>
     
      
    </motion.section>
  );
}
