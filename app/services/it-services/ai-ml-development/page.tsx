'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Code, Database, Shield, Zap, Users, LineChart } from 'lucide-react';
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

export default function AIMLDevelopmentPage() {
  return (
    <ErrorBoundary>
      <div>
        <PageHeader 
          title="AI & ML Development" 
          description="Transforming businesses with intelligent solutions"
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
              <h2 className="text-3xl font-bold mb-8">What We Do in AI & ML Development</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Artificial Intelligence and Machine Learning are revolutionizing how businesses operate. At TechBrill Solutions, we develop cutting-edge AI and ML solutions that help businesses automate processes, gain insights from data, and make smarter decisions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our team of AI experts and data scientists work together to create custom solutions that address your specific business challenges, from predictive analytics to natural language processing and computer vision.
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
                  src="/images/services/ai-ml-hero.jpg" 
                  alt="AI and Machine Learning Development" 
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
              Benefits of AI & ML Development
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
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhanced Decision Making</h3>
                <p className="text-gray-700 dark:text-gray-300">Leverage data-driven insights to make informed business decisions and predict future trends.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
                <p className="text-gray-700 dark:text-gray-300">Automate repetitive tasks and workflows to improve efficiency and reduce operational costs.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalized Experiences</h3>
                <p className="text-gray-700 dark:text-gray-300">Deliver tailored experiences to customers through AI-powered personalization.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-700 dark:text-gray-300">Forecast trends and behaviors to stay ahead of market changes and customer needs.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Database className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
                <p className="text-gray-700 dark:text-gray-300">Transform raw data into actionable insights that drive business growth.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
                <p className="text-gray-700 dark:text-gray-300">Implement AI-powered security solutions to protect against threats and vulnerabilities.</p>
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
              <h2 className="text-3xl font-bold mb-8">Our AI & ML Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Machine Learning Solutions</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Predictive Analytics</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision</li>
                    <li>• Recommendation Systems</li>
                    <li>• Pattern Recognition</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">AI Development</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Custom AI Solutions</li>
                    <li>• Chatbots & Virtual Assistants</li>
                    <li>• Intelligent Automation</li>
                    <li>• AI Integration Services</li>
                    <li>• AI Strategy Consulting</li>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-lg mb-8">Contact us today to discuss how AI and ML can benefit your organization.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 