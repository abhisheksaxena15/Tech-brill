'use client';

import React from 'react';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function WebAnalyticsPage() {
  return (
    <div>
      <PageHeader 
        title="Web Analytics" 
        description="Tracking and analyzing website data for informed decisions"
      />

      {/* Service Explanation Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">What is Web Analytics?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {/* Placeholder: Explain what Web Analytics entails */}
            Provide a clear and concise explanation of your web analytics services.
          </p>
          {/* Add more detailed explanation and process */}
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Benefits of Web Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder: List key benefits */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Benefit 1 Title</h3>
              <p className="text-gray-700 dark:text-gray-300">Explanation of Benefit 1 specific to web analytics.</p>
            </div>
            {/* Add more benefits */}
          </div>
        </div>
      </section>

      {/* Customer Pain Points Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Addressing Your Web Analytics Challenges</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
            {/* Placeholder: List common pain points and how your service addresses them */}
            <li>Pain Point 1: Briefly describe the pain point and your solution.</li>
            {/* Add more pain points */}
          </ul>
        </div>
      </section>

      {/* Case Studies/Success Stories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Web Analytics Case Studies</h2>
          {/* Placeholder: Showcase relevant case studies or testimonials */}
          {/* Add case studies */} 
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Ready to Understand Your Website Data?</h2>
          <p className="text-lg mb-8">Contact us today to discuss your web analytics needs.</p>
          <Button variant="secondary" size="lg" className="group">
            Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  );
} 