import React from 'react';
import Section from './Section';
import { PUBLICATIONS } from '../constants';
import { motion } from 'framer-motion';

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
);

const Publications: React.FC = () => {
  return (
    <Section title="Publications" id="publications">
      <div className="space-y-8">
        {PUBLICATIONS.map((pub, index) => (
          <motion.div
            key={index}
            className="bg-secondary p-6 rounded-lg border border-border-color shadow-lg transition-all duration-300 hover:border-accent/80 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-accent mb-2">{pub.title}</h3>
            <p className="text-text-secondary mb-4 italic">{pub.journal}</p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-primary font-semibold hover:text-accent transition-colors"
            >
              <LinkIcon className="w-4 h-4" />
              View Publication
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
