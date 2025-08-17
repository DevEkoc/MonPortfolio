
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from './Container';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const specialities = [
    'Développement Frontend avec React & Next.js',
    'Développement Backend avec Django & Node.js',
    'Bases de données SQL et NoSQL',
    'Architecture et déploiement Cloud',
    'Intégration et livraison continues (CI/CD)',
  ];

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-800"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <Container>
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Colonne de texte */}
          <div className="md:col-span-7">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              À propos de moi
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Passionné par la création de solutions logicielles élégantes et performantes, je possède plusieurs années d'expérience dans le développement d'applications web complètes. Mon parcours m'a permis de maîtriser à la fois les technologies frontend et backend, me permettant de transformer une idée simple en un produit robuste et prêt pour le marché.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Voici quelques-unes des technologies avec lesquelles j'ai récemment travaillé :
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-4">
              {specialities.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 dark:text-primary-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-gray-700 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Colonne image */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full -inset-4 blur-xl opacity-30"></div>
              <img
                src="/images/eko.jpg"
                alt="Photo de Jeannot Frederic NGOULEFACK KAMGA"
                className="relative w-full h-auto rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default AboutSection;
