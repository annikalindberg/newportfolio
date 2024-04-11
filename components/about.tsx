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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> </SectionHeading>
      <p className="mb-3">
       In 2020, I transitionend from a career as a {" "}
        <span className="font-medium">executive coordinator</span>{" "} into web development, and I havent looked back since. 2023 I decided to enroll Technigo bootcamp and leverage my skills into the leading technologies on the market. After graduation I started building on my portfolio, my tech stack and my passion for code. {" "} <br /> I have my freelance business "NextEdit Tech Solutions", focusing on building accessible and beautiful designs and handcoded websites for small businesses and startups. Since I have a background working within education and accessibility compliance, I have a keen eye for details and a passion for making the web a better place for everyone. In my portfolio I added several certificates within{" "} <span className="font-medium">web accessibility standards</span>{" "} and{" "} <span className="font-medium">UX-design</span>{" "}. In addition to software development, I offer accessibility audits and consulting services for businesses and organizations. 
      </p>
      <SectionHeading>I build full-stack applications</SectionHeading>
      <p>
        <span className="italic">My favorite part of programming</span> is the
        problem-sol aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. </p> <p> My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . TypeScript and JavaScript is my first languages, and I take pride in always striving for high quality code, ensuring a great user experience for <span className="fint-medium">everyone</span> - wether visiting the app using a screenreader or other assistive technology. I love combining my intrest in the latest design trends, keep playfulness and innovative edge yet making sure the design is accessible and using best UX-principles as well as  <span className="italic">accessibility standards</span> is a challenge I will always accept.</p> <p> I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. I am also open to{" "} <span className="font-medium">freelance opportunities</span> and{" "} <span className="font-medium">collaborations</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
