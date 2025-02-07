"use client";  // Add this at the top

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="hero_banner relative w-full pt-20">
      <div className="absolute inset-0 bg-cover bg-center" />
      <div className="container mx-auto mx-auto ">
        <motion.div
          className="relative z-2 banner_content max-w-2xl"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-semibold mb-4" 
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Software Development Company
          </motion.h1>
          <motion.p
            className="text-[22px] font-normal text-customwhite mb-8" 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            We design, develop & deploy across the tech stack, maximizing your software development project team with expert technical talent. Get in touch regarding your next software or web development project!
          </motion.p>

          <motion.div
            className="btn_wrapper flex space-x-4"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button className="bg-white text-black px-6 py-3 rounded-md  shadow-md transition flex items-center">
              Contact Us
            </button>
            <button className="trans_button flex items-center text-[#F7F8F8] px-6 py-3 rounded-md transition hover:bg-[#4353FF] hover:text-white">
              Learn More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="ml-2 w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Banner Image Animation - coming from top-right */}
      <motion.div
        className="banner_image pl-20"
        initial={{ opacity: 0, x: 200, y: -300 }} 
        animate={{ opacity: 1, x: 0, y: 0 }}    
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}   
      >
        <Image
          src="/images/bannerimg.png"
          alt="Banner Image"
          width={1920}
          height={300}
        />
      </motion.div>
    </div>
  );
};

export default HeroBanner;
