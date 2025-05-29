'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Users, BarChart, Shield, Zap, Clock, Bell } from 'lucide-react';
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

export default function MobileAppDevelopmentPage() {
  return (
    <ErrorBoundary>
      <div>
        <PageHeader 
          title="Mobile App Development" 
          description="Building innovative and user-friendly mobile applications"
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
              <h2 className="text-3xl font-bold mb-8">What We Do in Mobile App Development</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Mobile app development involves creating software applications that run on mobile devices like smartphones and tablets. With billions of smartphone users worldwide, a well-designed mobile app is a powerful tool for businesses to connect with their audience, enhance brand visibility, and deliver valuable services.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                At TechBrill Solutions, we specialize in creating native and cross-platform mobile applications that deliver exceptional user experiences. Our team combines technical expertise with creative design to build apps that are not only visually appealing but also perform flawlessly across all devices.
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
                  src="/images/services/mobile-app-hero.jpg" 
                  alt="Mobile App Development" 
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
              Benefits of Mobile App Development for Your Business
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
                <h3 className="text-xl font-semibold mb-3">Enhanced Customer Value & Convenience</h3>
                <p className="text-gray-700 dark:text-gray-300">Provide users with easy, on-the-go access to your services, improving loyalty and engagement.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <BarChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Build a Stronger Brand Presence</h3>
                <p className="text-gray-700 dark:text-gray-300">A dedicated app keeps your brand visible and fosters long-term brand awareness.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Bell className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Improved Customer Relationships</h3>
                <p className="text-gray-700 dark:text-gray-300">Facilitate direct communication through features like in-app feedback and push notifications.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Create New Revenue Streams</h3>
                <p className="text-gray-700 dark:text-gray-300">Open up opportunities for in-app purchases, subscriptions, advertising, and more.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Utilize Unique Device Features</h3>
                <p className="text-gray-700 dark:text-gray-300">Leverage features like camera, GPS, and push notifications for richer user experiences.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Gain In-depth Analytics & Insights</h3>
                <p className="text-gray-700 dark:text-gray-300">Collect valuable data on user behavior to refine your offerings and marketing strategies.</p>
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
              <h2 className="text-3xl font-bold mb-8">Addressing Common Mobile App Development Challenges</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Developing a successful mobile app comes with its own set of hurdles. Businesses often encounter challenges such as:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
                <li>High Development Costs: Building native apps for multiple platforms (iOS and Android) can be expensive and resource-intensive.</li>
                <li>Ongoing Maintenance: Apps require continuous updates, bug fixes, and security patches, leading to recurring costs.</li>
                <li>App Store Approval Process: Navigating the submission guidelines and potential rejections from app stores can cause delays.</li>
                <li>Device Fragmentation: Ensuring a consistent user experience across numerous devices, screen sizes, and OS versions can be complex.</li>
                <li>Security Concerns: Protecting user data and the app from vulnerabilities is crucial, requiring robust security measures.</li>
              </ul>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your mobile app development needs.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 