import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  return (
    <Section title="Technical Skills" id="skills">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {SKILL_CATEGORIES.map((category) => (
          <motion.div
            key={category.title}
            className="bg-secondary p-6 rounded-lg border border-border-color transition-all duration-300 shadow-lg group hover:border-accent hover:-translate-y-1 relative"
            variants={cardVariants}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-accent mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <span key={skill.name} className="bg-border-color text-text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {skill.name}
                    </span>
                ))}
                </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;