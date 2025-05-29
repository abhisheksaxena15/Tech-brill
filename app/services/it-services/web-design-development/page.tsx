'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Layout, Smartphone, Shield, Zap, Users } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function WebDesignDevelopmentPage() {
  return (
    <ErrorBoundary>
      <div>
        <PageHeader 
          title="Web Design & Development" 
          description="Crafting elegant, user-first web experiences"
        />

        {/* Service Explanation Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8">What We Do in Web Design & Development</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Web design and development is the process of creating visually appealing, functional, and user-friendly websites. In today's digital landscape, a professional online presence is crucial for building credibility, reaching customers, and achieving business goals.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                At TechBrill Solutions, we combine cutting-edge technology with creative design to deliver websites that not only look stunning but also drive results. Our team of expert developers and designers work together to create seamless, responsive, and high-performing web solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full max-w-4xl mx-auto aspect-video">
                <Image 
                  src="/images/services/web-design-hero.jpg" 
                  alt="Web Design and Development" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16">
          <div className="container">
            <motion.h2 
              className="text-3xl font-bold mb-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Benefits of Professional Web Design & Development
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Increase Trust and Credibility</h3>
                <p className="text-gray-700 dark:text-gray-300">A professional website builds confidence with visitors and establishes your brand's authority.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Improve Search Engine Ranking</h3>
                <p className="text-gray-700 dark:text-gray-300">Well-structured and optimized websites perform better in search results, driving organic traffic.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Boost Conversion Rates</h3>
                <p className="text-gray-700 dark:text-gray-300">Strategic design guides users through your site, encouraging them to take desired actions.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Layout className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Create a Strong First Impression</h3>
                <p className="text-gray-700 dark:text-gray-300">Your website is often the first interaction a potential customer has with your brand.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Gain a Competitive Edge</h3>
                <p className="text-gray-700 dark:text-gray-300">Stand out from competitors with a unique, modern, and high-performing website.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhance Website Security</h3>
                <p className="text-gray-700 dark:text-gray-300">Professional developers implement robust security measures to protect your website.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Customer Pain Points Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8">Addressing Common Web Development Challenges</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Building and maintaining a successful website can be challenging. Businesses often face issues like:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
                <li>Keeping up with technology: The web evolves rapidly. We stay updated on the latest trends, technologies, and best practices so you don't have to.</li>
                <li>Achieving a unique and effective design: Avoiding generic templates and creating a design that truly represents your brand and converts visitors.</li>
                <li>Ensuring functionality and security: Developing a site that works flawlessly on all devices and is protected against cyber threats.</li>
                <li>Saving time and resources: The complexity of web development can be overwhelming. Outsourcing saves you valuable time and allows you to focus on your core business.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Case Studies/Success Stories Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Our Web Development Success Stories</h2>
            {/* Placeholder: Showcase relevant case studies or testimonials */}
             <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
               {/* Placeholder: Introduce your case studies and their impact */}
               Discover how TechBrill Solutions has helped businesses like yours succeed with professional web design and development. Our case studies highlight the challenges clients faced and the tangible results we delivered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Placeholder for individual case study blocks */}
               <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">[Case Study Title 1]</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">[Brief description of the case study and results.]</p>
                {/* Placeholder for case study image */}
                <img src="/placeholder-case-study-1.jpg" alt="[Case Study 1 Title]" className="mx-auto rounded-lg shadow mb-4" />
                <a href="#" className="text-primary font-medium">Read More [Placeholder: Update href]</a>
              </div>
               <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">[Case Study Title 2]</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">[Brief description of the case study and results.]</p>
                 {/* Placeholder for case study image */}
                <img src="/placeholder-case-study-2.jpg" alt="[Case Study 2 Title]" className="mx-auto rounded-lg shadow mb-4" />
                <a href="#" className="text-primary font-medium">Read More [Placeholder: Update href]</a>
              </div>
              {/* Add more case studies or testimonials as needed */}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-primary text-white text-center">
          <motion.div 
            className="container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready for a Stunning Website?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your web design and development needs.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 