"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070"
            alt="Technology background"
            fill
            className="object-cover opacity-30 dark:opacity-10"
            priority
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedText
              text="Innovative IT Solutions for Your Business Growth"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center lg:text-left"
              delay={0.2}
            />
            <AnimatedSection delay={0.4} animation="fade">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                We deliver cutting-edge technology solutions that help businesses transform, innovate, and thrive in the
                digital era. Our expert team turns your vision into reality with precision and creativity.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.6} animation="fade">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group">
                  Get Started{" "}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10">
                    Our Services
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8} animation="slide">
              <div className="mt-12 flex flex-wrap justify-center gap-8 lg:space-x-8 lg:flex-nowrap">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">20+</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">500+</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">100+</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5} animation="scale">
            <div className="relative">
              <motion.div
                className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                  alt="IT professionals working together"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">24/7 Support Available</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Trusted by 100+ Clients</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
