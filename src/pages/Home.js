import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, Database, Laptop, Smartphone,
  Star, Sparkles
} from 'lucide-react';
import deepak from '../assest/deepak_pic.jpg'
import Testimonials from '../components/Testimonials';
import SocialMediaLinks from '../components/SocialMediaLinks';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialMediaLinks = [
    { type: 'github', url: 'https://github.com/deepakcs2003' },
    { type: 'linkedin', url: 'https://linkedin.com/in/deepakv2003'},
    { type: 'twitter', url: 'https://twitter.com/your-username' },
    { type: 'email', url: 'mailto:guddi7709894512@gmail.com' },
  ];

  return (
    <div className="min-h-screen bg-[#090517] font-sans text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="z-10 w-full max-w-4xl text-center mx-auto">
          {/* Sparkle Icon */}
          <div className="inline-block mb-6">
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-[#4F46E5]" />
          </div>

          {/* Name Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Deepak Vishwakarma
          </h1>

          {/* Subtitle */}
          <p className="py-2 px-4 rounded-full text-lg sm:text-xl lg:text-2xl text-white bg-gradient-to-r from-[#4F46E5]/20 to-[#A855F7]/20 backdrop-blur-sm border border-[#4F46E5]/20">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>

          {/* Social Media Links */}
          <SocialMediaLinks links={socialMediaLinks} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090517] backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-16 sm:mb-24 text-white">
            About Me
          </h2>

          {/* Grid Layout for About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Rotating Background Glow */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#A855F7] blur-lg opacity-50 animate-spin-slow"></div>
              <img
                src={deepak}
                alt="Deepak Vishwakarma"
                className="relative rounded-full object-cover border-4 border-[#4F46E5]/20 shadow-xl"
              />
            </div>

            {/* About Text */}
            <div className="space-y-6 sm:space-y-8">
              {[
                "Hi, I'm Deepak Vishwakarma, a full-stack developer and coder based in Mumbai. Coding has been my passion for a long time.",
                "Currently pursuing Computer Science at Walchand College of Engineering, I've built multiple full-stack applications."
              ].map((text, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#A855F7] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <p className="relative text-lg sm:text-xl text-white p-6 rounded-lg bg-[#1F2937] backdrop-blur-sm">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;