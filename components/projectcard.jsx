import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TechSkills from './techskills';
import AchievementRow from './acheivementrow';

const FeaturedSections = () => {
  const projects = [
    {
      id: 0,
      title: "my-personal-portfolio-v1",
      imageUrl: "https://res.cloudinary.com/dmringwwj/image/upload/v1766921746/portfolio1_sdqaz2.png",
      alt: "Image 0"
    },
    {
      id: 1,
      title: "xackstack-a-bug-bounty-program",
      imageUrl: "https://res.cloudinary.com/dmringwwj/image/upload/v1766914263/xackstack1_b9ubpp.png",
      alt: "Image 1"
    },
    {
      id: 2,
      title: "hajj-performers-qurbani-tracker",
      imageUrl: "https://res.cloudinary.com/dmringwwj/image/upload/v1766744875/HajjAdminPanel1_deyzu9.png",
      alt: "Image 2"
    }
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-1.5 text-xl font-medium text-neutral-800 dark:text-neutral-300">
        <svg 
          stroke="currentColor" 
          fill="currentColor" 
          strokeWidth="0" 
          viewBox="0 0 24 24" 
          height="24" 
          width="24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
        </svg>
        <h2 className="capitalize">Featured Sections</h2>
      </div>
      
      <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
        Explore everything I have crafted, contributed, and accomplished.
      </div>
      
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="flex flex-col mb-6">
            <Link 
              href="/projects"
              className="bg-neutral-100 dark:bg-neutral-800 rounded-lg w-fit p-3 text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity mb-4"
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                height="22" 
                width="22" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z"></path>
              </svg>
            </Link>
            
            <h2 className="mb-1 text-base font-semibold text-neutral-800 dark:text-neutral-300">
              Projects Showcase
            </h2>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              A selection of real apps built to solve real problems.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={`/projects/${project.title}`}
                className="block group"
              >
                <div className="rounded-lg overflow-hidden border border-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative w-full h-28">
                    <Image
                      src={project.imageUrl}
                      alt={project.alt}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
              <div className="flex flex-col mb-6">
                <Link 
                  href="/projects"
                  className="bg-neutral-100 dark:bg-neutral-800 rounded-lg w-fit p-3 text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity mb-4"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    height="22" 
                    width="22" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z"></path>
                  </svg>
                </Link>
                
                <h2 className="mb-1 text-base font-semibold text-neutral-800 dark:text-neutral-300">
                  Projects Showcase
                </h2>
                
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  A selection of real apps built to solve real problems.
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                {projects.map((project) => (
                  <Link 
                    key={project.id}
                    href={`/projects/${project.title}`}
                    className="block group"
                  >
                    <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="relative w-full h-28">
                        <Image
                          src={project.imageUrl}
                          alt={project.alt}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          unoptimized
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <TechSkills />
          
          <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-0 flex flex-col">
            <div className="flex flex-col p-6 items-center text-center">
              <Link
                className="bg-neutral-100 dark:bg-neutral-800 rounded-lg w-fit p-3 text-neutral-900 dark:text-neutral-100"
                href="/about"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                </svg>
              </Link>

              <h2 className="mb-1 mt-3 text-sm font-medium text-neutral-800 dark:text-neutral-300">
                About Me
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Who I am and what I do.
              </p>
            </div>

            <div className="flex items-center justify-center pb-6">
              <div className="w-20 h-20 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            </div>
          </div>
        </div>
        
        <AchievementRow />
      </div>
    </div>
  );
};

export default FeaturedSections;