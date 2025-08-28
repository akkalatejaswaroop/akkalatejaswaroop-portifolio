import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Experience: React.FC = () => {
  return (
    <Section title="Experience" id="experience">
      <motion.div 
        className="relative border-l-2 border-border-color ml-4 md:ml-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
        >
        {EXPERIENCE.map((item, index) => (
          <motion.div key={index} className="mb-10 ml-8" variants={itemVariants}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-primary">
              <svg className="w-2.5 h-2.5 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
              </svg>
            </span>
            <div className="bg-secondary border border-border-color p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:border-accent/50">
              <h3 className="flex items-center mb-1 text-xl font-semibold text-text-primary">
                {item.role} <span className="text-accent text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">{item.company}</span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-text-secondary">{item.duration}</time>
              <ul className="mt-4 space-y-2 text-text-secondary list-disc list-inside">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;