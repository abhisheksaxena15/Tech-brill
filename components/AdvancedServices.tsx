'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Plus } from "lucide-react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface CardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  image: string;
}

const cards: CardProps[] = [
  {
    title: 'Digital Content Solutions',
    description: 'Smart content solutions for eLearning– LMS platforms, conversion, and interactive digital experiences.',
    icon: '/icons/digital-content.svg',
    href: '#',
    image: '/images/digital-content.jpg',
  },
  {
    title: 'Generative AI',
    description: 'We build and optimize Generative AI solutions to unlock business potential and drive intelligent automation.',
    icon: '/icons/generative-ai.svg',
    href: '#',
    image: '/images/generative-ai.jpg',
  },
  {
    title: 'Blockchain',
    description: 'Secure, transparent, and decentralized blockchain solutions to streamline operations and build digital trust.',
    icon: '/icons/blockchain.svg',
    href: '#',
    image: '/images/blockchain.jpg',
  },
  {
    title: 'Data Analytics',
    description: 'Unlock business value through our data analytics services that transform raw data into actionable insights.',
    icon: '/icons/data-analytics.svg',
    href: '#',
    image: '/images/data-analytics.jpg',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Drive innovation with cloud infrastructure and DevOps practices that optimize performance and streamline workflows.',
    icon: '/icons/cloud-devops.svg',
    href: '#',
    image: '/images/cloud-devops.jpg',
  },
];

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7 } },
  exit: { opacity: 0, transition: { duration: 0.7 } },
};

const AUTO_PLAY_DELAY = 5000;

const AdvancedServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay logic
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, AUTO_PLAY_DELAY);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);

  // Manual navigation
  const goTo = (idx: number) => setActiveIndex(idx);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % cards.length);

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Advanced Services</h3>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Transforming business with latest <span className="italic text-blue-800 dark:text-blue-200">Trends & Technologies</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>
        <div className="relative max-w-xl md:max-w-4xl mx-auto px-4">
          {/* Arrow Controls */}
          <button
            aria-label="Previous"
            onClick={goPrev}
            className="absolute top-2/4 left-0 z-10 -translate-y-2/4 bg-black/30 hover:bg-black/50 p-2 rounded-full"
            style={{ transform: 'translateY(-50%)' }}
          >
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button
            aria-label="Next"
            onClick={goNext}
            className="absolute top-2/4 right-0 z-10 -translate-y-2/4 bg-black/30 hover:bg-black/50 p-2 rounded-full"
            style={{ transform: 'translateY(-50%)' }}
          >
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </button>
          {/* Fade Animation Card */}
          <div className="h-full min-h-[420px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group mx-auto max-w-sm md:max-w-2xl w-full"
              >
                <div className="relative w-full h-48 md:h-64">
                  <img
                    src={cards[activeIndex].image}
                    alt={cards[activeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-2 bg-blue-600 dark:bg-blue-800 rounded-md flex items-center justify-center">
                    <Plus className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-4">{cards[activeIndex].title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-6 text-base md:text-lg">{cards[activeIndex].description}</p>
                  <Link 
                    href={cards[activeIndex].href} 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-base md:text-lg font-medium"
                  >
                    Read More <span className="ml-2">&#x2192;</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
            {cards.map((_, i) => (
              <button
                key={i}
                className={`h-3 w-3 rounded-full transition-colors ${activeIndex === i ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedServices; 