"use client";

import React from 'react';
import { motion } from 'framer-motion';
const SocialMediaCard = ({ title, description, buttonText, icon, gradient, link }) => {
  return (
   <main className="max-w-[854px] transition-all duration-300 lg:w-4/5 mx-auto">
      <div
        className="mt-20 p-8 lg:mt-0 aos-init aos-animate"
        data-aos="fade-up"
      >
        <h1 className="text-2xl font-medium">Contact</h1>

        <p className="mb-6 border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
          Let&apos;s get in touch
        </p>

        <div className="flex flex-col space-y-4">
          <h2>Find me on social media</h2>

          {/* ===== GRID START ===== */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* ================= GMAIL (FULL WIDTH) ================= */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-300 p-6 dark:border-neutral-700 md:col-span-2 bg-gradient-to-b from-red-700 to-red-900">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
                style={{
                  background:
                    "radial-gradient(circle at 0px 0px, rgba(255, 255, 255, 0.25), transparent 80%)",
                }}
              />

              <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/5">
                {/* SVG same as HTML */}
                {/* (no change) */}
              </div>

              <div className="text-red-300 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">
                  Stay in Touch
                </h4>
                <p className="pb-2 text-xs">
                  Reach out via email for inquiries or collaborations.
                </p>

                <a
                  href="mailto:satriaabaharii@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-300 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800"
                >
                  <span className="text-sm font-medium">
                    Go to <span className="capitalize">gmail</span>
                  </span>
                </a>
              </div>

              <div className="flex items-end justify-end">
                <div className="rounded-2xl border-4 border-opacity-80 bg-opacity-5 p-2 text-neutral-50 bg-red-300 border-red-300">
                  {/* SVG */}
                </div>
              </div>
            </div>

            {/* ================= INSTAGRAM ================= */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-300 p-6 dark:border-neutral-700 bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 284px 6px, rgba(255,255,255,0.25), transparent 80%)",
                }}
              />

              <div className="text-purple-200 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">
                  Follow My Journey
                </h4>
                <p className="pb-2 text-xs">Follow my creative journey.</p>

                <a
                  href="https://www.instagram.com/satriabaharii_/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple-200 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800"
                >
                  Go to <span className="capitalize">instagram</span>
                </a>
              </div>
            </div>

            {/* ================= LINKEDIN ================= */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-300 p-6 dark:border-neutral-700 bg-gradient-to-b from-sky-700 to-sky-900">
              <div className="text-sky-300 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">
                  Let&apos;s Connect
                </h4>
                <p className="pb-2 text-xs">
                  Connect with me professionally.
                </p>

                <a
                  href="https://www.linkedin.com/in/satria-bahari/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-sky-300 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800"
                >
                  Go to <span className="capitalize">linkedin</span>
                </a>
              </div>
            </div>

            {/* ================= TIKTOK ================= */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-300 p-6 dark:border-neutral-700 bg-gradient-to-b from-neutral-700 to-neutral-900">
              <div className="text-neutral-400 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">
                  Join the Fun
                </h4>
                <p className="pb-2 text-xs">
                  Watch engaging and fun content.
                </p>

                <a
                  href="https://www.tiktok.com/@satriaabaharii/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neutral-400 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800"
                >
                  Go to <span className="capitalize">tiktok</span>
                </a>
              </div>
            </div>

            {/* ================= GITHUB ================= */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-300 p-6 dark:border-neutral-700 bg-gradient-to-b from-slate-900 to-slate-950">
              <div className="text-slate-400 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">
                  Explore the Code
                </h4>
                <p className="pb-2 text-xs">
                  Explore my open-source work.
                </p>

                <a
                  href="https://github.com/satriabahari"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-400 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800"
                >
                  Go to <span className="capitalize">github</span>
                </a>
              </div>
            </div>

          </div>
          {/* ===== GRID END ===== */}
           <div className="space-y-4">
      <h2>Or send me a message</h2>

      <form className="space-y-4 transition-all duration-300">
        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="w-full space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
            />
          </div>

          <div className="w-full space-y-2">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
            />
          </div>
        </div>

        <div className="w-full space-y-2">
          <textarea
            name="message"
            rows={2}
            placeholder="Message"
            spellCheck={false}
            className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-neutral-600 px-4 py-2 text-neutral-50 shadow-md transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg dark:bg-neutral-800 hover:dark:bg-neutral-700"
        >
          Send Email
        </button>
      </form>
    </div>
        </div>
      </div>
    </main>
  );
};

export default SocialMediaCard;
