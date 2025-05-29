'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, BarChart2, ShieldCheck, Users, Link, FileText } from 'lucide-react';
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

export default function SeoPage() {
  return (
    <ErrorBoundary>
      <div>
        <PageHeader 
          title="Search Engine Optimization (SEO)" 
          description="Boosting your online visibility and driving organic traffic"
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
              <h2 className="text-3xl font-bold mb-8">What is SEO?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Search Engine Optimization (SEO) is the process of improving the visibility and ranking of your website in search engine results pages (SERPs) like Google, Bing, and Yahoo. A strong SEO strategy involves optimizing your website's technical setup, content, and off-page factors to attract relevant organic traffic.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                At TechBrill Solutions, we help businesses achieve higher search engine rankings, increase their online visibility, and drive more qualified leads through comprehensive and ethical SEO services.
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
                  src="/images/services/seo-hero.jpg" 
                  alt="Search Engine Optimization" 
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
              Benefits of SEO
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
                <BarChart2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Increased Organic Traffic</h3>
                <p className="text-gray-700 dark:text-gray-300">Attract more visitors to your website who are actively searching for your products or services.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Improved Credibility & Trust</h3>
                <p className="text-gray-700 dark:text-gray-300">Higher search rankings build authority and trust with potential customers.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better User Experience</h3>
                <p className="text-gray-700 dark:text-gray-300">Optimizing for search engines often leads to a faster, more mobile-friendly, and user-friendly website.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Link className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher Conversion Rates</h3>
                <p className="text-gray-700 dark:text-gray-300">Visitors from organic search are often more motivated and likely to convert into customers.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Search className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cost-Effective Marketing</h3>
                <p className="text-gray-700 dark:text-gray-300">Compared to paid advertising, SEO offers a more sustainable and cost-effective way to drive traffic over time.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Long-Term Results</h3>
                <p className="text-gray-700 dark:text-gray-300">A well-implemented SEO strategy can provide lasting visibility and traffic to your website.</p>
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
              <h2 className="text-3xl font-bold mb-8">Our SEO Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Technical SEO</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Website Audit & Analysis</li>
                    <li>• Site Speed Optimization</li>
                    <li>• Mobile Optimization</li>
                    <li>• Indexability & Crawlability</li>
                    <li>• Structured Data Markup</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">On-Page SEO</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Keyword Research & Strategy</li>
                    <li>• Content Optimization</li>
                    <li>• Meta Description & Title Tag Optimization</li>
                    <li>• Header Tag Implementation</li>
                    <li>• Image Optimization</li>
                  </ul>
                </motion.div>

                 <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Off-Page SEO</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Backlink Building & Outreach</li>
                    <li>• Local SEO (Google My Business Optimization)</li>
                    <li>• Online Reputation Management</li>
                    <li>• Social Signal Building</li>
                    <li>• Content Promotion</li>
                  </ul>
                </motion.div>

                 <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Content Marketing for SEO</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Blog Post Creation</li>
                    <li>• Landing Page Content</li>
                    <li>• Pillar Page & Topic Cluster Development</li>
                    <li>• Content Audits & Strategy</li>
                    <li>• On-going Content Optimization</li>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
            <p className="text-lg mb-8">Contact us today for a free SEO consultation.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 