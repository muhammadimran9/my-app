"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CareerSection from "../../components/CareerSection";
import EducationSection from "../../components/EducationSection";

const AboutPage = () => {
  return (
    <div className="main-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* About Header */}
        <section className="space-y-2">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
            About
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A brief introduction to who I am.
          </p>
        </section>

        {/* About Content */}
        <section className="space-y-4">
          <div className="prose prose-lg max-w-none">
            <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
              Hi there! I'm Muhammad Imran. Thanks for taking the time to visit my website. I'm a Full-Stack Web & Mobile App Developer who loves building practical, high-impact digital products. My toolkit includes the MERN Stack, Next.js, and Tailwind CSS on the web side, and Kotlin, Java, React Native, and KMP for mobile development. Whether it's a sleek interface or a powerful backend, I enjoy bringing ideas to life with clean and purposeful code.
            </p>
            
            <p className="leading-relaxed text-neutral-700 dark:text-neutral-300 mt-4">
              Over the months, I've developed a strong technical toolkit that covers both web and mobile development. From crafting responsive, accessible user interfaces to building secure backend architectures, I love making products that feel fast, reliable, and SEO friendly.
            </p>
            
            <p className="leading-relaxed text-neutral-700 dark:text-neutral-300 mt-4">
              What truly motivates me is solving real problems. I believe technology should simplify life, not complicate it. So whenever I build something, I focus on understanding the user's emotions, behaviors, and expectations. This helps me design solutions that don't just "work," but feel effortless, enjoyable, and meaningful.
            </p>
          </div>
        </section>

        {/* Career Section */}
        <CareerSection />

        {/* Education Section */}
        <EducationSection />
      </motion.div>
    </div>
  );
};

export default AboutPage;