"use client";

import { motion } from "framer-motion";

const logoSrc = "/assets/logo-circle.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden absolute flex items-center justify-center"
        >
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoSrc}
              alt="상처지킴이 AURA 로고"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-accent text-sm xl:text-base tracking-[0.4em] uppercase">AURA</span>
              <span className="text-white text-5xl xl:text-7xl font-extrabold mt-2">상처지킴이</span>
              <span className="text-white/40 text-xs xl:text-sm mt-3 max-w-[240px]">AI Ulcer Recognition Assistance</span>
            </div>
          )}
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="260"
            stroke="#2A7AE2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
