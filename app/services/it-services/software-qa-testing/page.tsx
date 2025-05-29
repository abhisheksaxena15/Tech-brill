'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bug, Shield, Zap, Users, LineChart, CheckCircle, Code } from 'lucide-react';
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

export default function SoftwareQATestingPage() {
  return (
    <ErrorBoundary>
      <div>
        <PageHeader 
          title="Software QA & Testing" 
          description="Ensuring quality and reliability in every line of code"
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
              <h2 className="text-3xl font-bold mb-8">What We Do in Software QA & Testing</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Quality Assurance and Testing are crucial components of software development. At TechBrill Solutions, we provide comprehensive testing services that ensure your software is reliable, secure, and performs flawlessly across all platforms and devices.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our team of experienced QA engineers uses industry-leading tools and methodologies to identify and resolve issues before they impact your users, helping you deliver high-quality software that meets and exceeds expectations.
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
                  src="/images/services/qa-testing-hero.jpg" 
                  alt="Software QA and Testing" 
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
              Benefits of Professional QA & Testing
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
                <Bug className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Early Bug Detection</h3>
                <p className="text-gray-700 dark:text-gray-300">Identify and fix issues early in the development cycle, reducing costs and time to market.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
                <p className="text-gray-700 dark:text-gray-300">Comprehensive security testing to protect your application from vulnerabilities and threats.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Improved User Experience</h3>
                <p className="text-gray-700 dark:text-gray-300">Ensure your software delivers a seamless and intuitive experience for all users.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-700 dark:text-gray-300">Identify and resolve performance bottlenecks for optimal application speed and efficiency.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-700 dark:text-gray-300">Maintain high standards of quality throughout the development process.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Code Quality</h3>
                <p className="text-gray-700 dark:text-gray-300">Ensure clean, maintainable, and well-documented code that meets industry standards.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8">Our QA & Testing Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Testing Types</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Functional Testing</li>
                    <li>• Performance Testing</li>
                    <li>• Security Testing</li>
                    <li>• Usability Testing</li>
                    <li>• Compatibility Testing</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">QA Services</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Test Automation</li>
                    <li>• API Testing</li>
                    <li>• Mobile App Testing</li>
                    <li>• Load & Stress Testing</li>
                    <li>• Continuous Testing</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Ensure Your Software Quality?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your QA and testing needs.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 