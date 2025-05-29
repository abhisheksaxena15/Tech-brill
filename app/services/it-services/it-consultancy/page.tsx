'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, LineChart, Users, Shield, Zap, Target, Briefcase } from 'lucide-react';
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

export default function ITConsultancyPage() {
  return (
    <ErrorBoundary>
      <div>
        <PageHeader 
          title="IT Consultancy" 
          description="Strategic technology solutions for business growth"
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
              <h2 className="text-3xl font-bold mb-8">What We Do in IT Consultancy</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At TechBrill Solutions, we provide expert IT consultancy services to help businesses navigate the complex world of technology. Our team of experienced consultants works closely with you to understand your unique challenges and develop strategic solutions that drive growth and innovation.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                From digital transformation to technology strategy and implementation, we guide you through every step of your technology journey, ensuring you make informed decisions that align with your business objectives.
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
                  src="/images/services/it-consultancy-hero.jpg" 
                  alt="IT Consultancy Services" 
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
              Benefits of IT Consultancy
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
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
                <p className="text-gray-700 dark:text-gray-300">Develop comprehensive technology strategies aligned with your business goals.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                <p className="text-gray-700 dark:text-gray-300">Identify opportunities to reduce IT costs while improving efficiency.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
                <p className="text-gray-700 dark:text-gray-300">Access to experienced IT professionals and industry best practices.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                <p className="text-gray-700 dark:text-gray-300">Identify and mitigate technology-related risks to your business.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
                <p className="text-gray-700 dark:text-gray-300">Guide your organization through successful digital transformation initiatives.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Alignment</h3>
                <p className="text-gray-700 dark:text-gray-300">Ensure your technology investments support your business objectives.</p>
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
              <h2 className="text-3xl font-bold mb-8">Our IT Consultancy Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Strategic Services</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Technology Roadmap Development</li>
                    <li>• Digital Transformation Strategy</li>
                    <li>• IT Infrastructure Planning</li>
                    <li>• Cloud Strategy & Migration</li>
                    <li>• IT Governance & Compliance</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Implementation Services</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Project Management</li>
                    <li>• Change Management</li>
                    <li>• Vendor Selection & Management</li>
                    <li>• Process Optimization</li>
                    <li>• Technology Integration</li>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your IT consultancy needs.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 