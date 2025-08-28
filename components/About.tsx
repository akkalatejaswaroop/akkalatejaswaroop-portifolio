
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section title="About Me" id="about">
      <div className="text-lg text-text-secondary space-y-4 max-w-4xl">
        <p>
          I'm a passionate and driven Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, on a mission to use technology to solve real-world problems. With an SGPA of 8.29 at NRI Institute of Technology, I blend academic excellence with hands-on technical experience in web development, cloud platforms, and cutting-edge AI tools.
        </p>
        <p>
          As the Founder of <span className="text-accent font-semibold">OpportunitiX</span>, I lead a student-run initiative that empowers learners with access to exclusive career-building opportunities—free courses, internships, and competitions. Through this, I've helped foster an inclusive and growth-focused learning community.
        </p>
        <p>
          I thrive in dynamic, collaborative environments and am always eager to learn, build, and contribute. My long-term vision is to become a versatile AI/ML engineer who builds intelligent systems that are impactful, inclusive, and future-ready. Let's connect and create something meaningful together!
        </p>
      </div>
    </Section>
  );
};

export default About;
