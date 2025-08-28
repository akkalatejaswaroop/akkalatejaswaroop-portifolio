import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);


const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const Projects: React.FC = () => {
  return (
    <Section title="Projects" id="projects">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            className="bg-secondary rounded-lg border border-border-color flex flex-col transition-colors duration-300 transform hover:-translate-y-1 shadow-lg group hover:border-accent relative"
            variants={cardVariants}
          >
             <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-1000"></div>
             <div className="relative bg-secondary p-6 rounded-lg flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                    <h4 className="font-semibold text-text-primary mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                            <CheckIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-text-secondary">{achievement}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                {project.demoLink && (
                    <div className="mt-auto pt-4 border-t border-border-color/50">
                        <a 
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                        >
                            View Demo <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                    </div>
                )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;