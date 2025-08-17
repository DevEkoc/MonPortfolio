'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useMotionValue, useSpring, useAnimation } from 'framer-motion';
import Container from './Container';
import { staggerContainer, fadeInUp, buttonVariants } from '@/lib/animations';

// Component for animating numbers
function AnimatedNumbers({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: false }); // Animate numbers every time

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', latest => {
      if (ref.current) {
        const suffix = value === 5 ? '+' : '';
        ref.current.textContent = latest.toFixed(0) + suffix;
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
}

// Data for the stats section
const stats = [
  {
    value: 50,
    label: 'Projets Réalisés',
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>
    ),
  },
  {
    value: 5,
    label: "Années d'expérience",
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
  },
  {
    value: 100,
    label: 'Satisfaction Client',
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 18.734V11.5a2 2 0 012-2h2.646M4 11.5h3M4 15.5h3m4-8.5V4a2 2 0 012-2h2a2 2 0 012 2v1.5" /></svg>
    ),
  },
];

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true }); // Use once:true for initial load detection
  const lastY = useRef(0);

  useEffect(() => {
    // Show animation on initial load if in view
    if (isInView) {
      controls.start('visible');
    }

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastY.current;
      
      // Update lastY position
      lastY.current = currentY;

      // Trigger animation only when scrolling down
      if (isScrollingDown) {
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView, controls]);

  return (
    <section
      id="home"
      ref={ref} // Attach ref to the section to track its visibility
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-20 overflow-hidden"
    >
      <Container>
        {/* Two-column layout for the main hero content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate={controls} // Control animation manually
        >
          {/* Left Column: Large Photo */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-1 flex justify-center"
          >
            <img
              src="/images/eko.jpg"
              alt="Photo de Jeannot Frederic NGOULEFACK KAMGA"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            variants={staggerContainer} // Stagger the text elements inside
            className="md:col-span-2 text-center md:text-left"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
            >
              Jeannot Frederic NGOULEFACK KAMGA
            </motion.h2>
            
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500 dark:from-primary-400 dark:to-orange-400 my-4 leading-relaxed py-2"
            >
              Ingénieur Logiciel
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto md:mx-0"
            >
              Spécialisé en React, Next.js, et Django. Je transforme vos idées en
              applications web modernes, performantes et exceptionnelles.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  href="#projects"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center shadow-lg shadow-primary-500/20"
                >
                  Voir mes projets
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  href="#contact"
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center"
                >
                  Me contacter
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section - continues to animate on every scroll */}
        <motion.div 
          className="mt-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 text-center shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {stat.icon}
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                <AnimatedNumbers value={stat.value} />
                {stat.value === 100 && '%'}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
