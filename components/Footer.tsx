import React from 'react';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-secondary border-t border-border-color">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-accent mb-4">Get In Touch</h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
          </p>
          <a href="mailto:tejaswaroopakkala@gmail.com" className="inline-block bg-accent text-primary font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors">
            Say Hello
          </a>
          <div className="mt-8 flex justify-center space-x-6">
                <a href="https://github.com/akkalatejaswaroop" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    <GithubIcon className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com/in/akkalatejaswaroop" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    <LinkedinIcon className="w-7 h-7" />
                </a>
                <a href="mailto:tejaswaroopakkala@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
                    <MailIcon className="w-7 h-7" />
                </a>
          </div>
        </div>
        <div className="text-center text-text-secondary mt-12 border-t border-border-color pt-6">
          <p>&copy; {new Date().getFullYear()} Akkala Teja Swaroop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;