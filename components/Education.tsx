
import React from 'react';
import Section from './Section';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Education: React.FC = () => {
  return (
    <Section title="Education & Certifications" id="education">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div className="bg-secondary p-6 rounded-lg border border-border-color shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-3">{EDUCATION.institution}</h3>
          <p className="text-lg font-semibold text-text-primary">{EDUCATION.degree}</p>
          <p className="text-text-secondary mb-2">{EDUCATION.duration}</p>
          <p className="text-text-secondary">{EDUCATION.details}</p>
        </div>
        
        {/* Certifications */}
        <div className="bg-secondary p-6 rounded-lg border border-border-color shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Certifications</h3>
          <ul className="space-y-3">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.name} className="flex items-center text-text-primary">
                 <svg className="w-4 h-4 mr-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                {cert.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Education;
