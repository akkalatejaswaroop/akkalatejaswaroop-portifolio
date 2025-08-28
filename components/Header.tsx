import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

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

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

// FIX: Add links for Education and AI Assistant sections to improve navigation.
const NAV_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Publications' },
    { href: '#education', label: 'Education' },
    { href: '#ai-chat', label: 'AI Assistant' },
    { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  return (
    <header className="relative">
      <div className="absolute top-0 left-0 w-full bg-secondary/80 backdrop-blur-sm border-b border-border-color z-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center py-3">
            <h1 className="text-xl font-bold text-text-primary">Akkala Teja Swaroop</h1>
            <div className="flex items-center space-x-2">
                <nav className="hidden md:flex items-center space-x-1">
                   {NAV_LINKS.map(link => (
                       <a 
                          key={link.href}
                          href={link.href}
                          className="px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-accent transition-colors"
                       >
                           {link.label}
                       </a>
                   ))}
                </nav>
                 <a href="/resume.pdf" download="Akkala_Teja_Swaroop_Resume.pdf" className="hidden md:inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-3 py-2 rounded-md hover:bg-accent hover:text-primary transition-colors">
                    <DownloadIcon className="w-4 h-4" />
                    Resume
                </a>
                <ThemeSwitcher />
            </div>
        </div>
      </div>
      <div id="home" className="relative bg-primary overflow-hidden min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-40 animate-aurora -z-0"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 py-16 md:py-0">
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 lg:gap-16">
                
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img 
                        src="/teja.jpg" 
                        alt="Akkala Teja Swaroop profile picture" 
                        className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-accent/50 shadow-lg transition-all duration-300 hover:shadow-accent/40 hover:scale-105"
                    />
                </div>
                
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white">Akkala Teja Swaroop</h2>
                    <p className="mt-4 text-xl md:text-2xl text-accent">AI & Machine Learning Engineer | Innovator</p>
                    <p className="mt-4 max-w-3xl mx-auto md:mx-0 text-text-secondary">
                        A motivated Computer Science student specializing in AI/ML, passionate about solving real-world problems with cloud technologies and developing intelligent systems.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start space-x-6">
                        <a href="https://github.com/akkalatejaswaroop" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                            <GithubIcon className="w-8 h-8" />
                        </a>
                        <a href="https://linkedin.com/in/akkalatejaswaroop" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                            <LinkedinIcon className="w-8 h-8" />
                        </a>
                        <a href="mailto:tejaswaroopakkala@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
                            <MailIcon className="w-8 h-8" />
                        </a>
                    </div>
                    <a href="/resume.pdf" download="Akkala_Teja_Swaroop_Resume.pdf" className="md:hidden mt-8 inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors w-full max-w-xs mx-auto">
                        <DownloadIcon className="w-5 h-5" />
                        Download Resume
                    </a>
                </div>

            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
