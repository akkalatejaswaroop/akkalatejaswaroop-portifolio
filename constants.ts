import { SkillCategory, ExperienceItem, ProjectItem, EducationItem, CertificationItem, PublicationItem } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'C' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Flask' },
      { name: 'Tailwind CSS' },
      { name: 'Scikit-learn' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'NLTK' },
      { name: 'React' },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'Regression' },
      { name: 'Classification' },
      { name: 'Model Training & Evaluation' },
      { name: 'Feature Engineering' },
      { name: 'Data Preprocessing' },
    ],
  },
  {
    title: 'Natural Language Processing',
    skills: [
      { name: 'Text Classification' },
      { name: 'Prompt Engineering' },
      { name: 'Query Understanding' },
      { name: 'Information Retrieval' },
    ],
  },
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'IBM Cloud' },
      { name: 'Google Cloud Platform' },
      { name: 'Oracle Cloud' },
    ],
  },
  {
    title: 'Tools & Soft Skills',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Jupyter Notebook' },
      { name: 'Problem Solving' },
      { name: 'Team Collaboration' },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'IBM SKILLBUILD Technology Frontend Web Development - Virtual Intern',
    company: 'Edunet Foundation',
    duration: 'Aug 2025 – Present',
    description: [
      'Worked on frontend web development tasks as part of a virtual internship.',
      'Collaborated with peers to enhance UI/UX components and deploy web solutions.'
    ],
  },
  {
    role: 'IBM SKILLBUILD Technology and Web Development - Virtual Intern',
    company: 'Edunet Foundation',
    duration: 'Aug 2025 – Present',
    description: [
      'Developed and optimized web applications using modern frameworks and tools.',
      'Engaged in structured learning to build scalable, responsive solutions.'
    ],
  },
  {
    role: 'IBM SKILLBUILD AI & Cloud Technologies - Virtual Intern',
    company: 'Edunet Foundation',
    duration: 'Jul 2025 – Aug 2025',
    description: [
      'Explored AI and cloud integration in practical applications.',
      'Built and tested cloud-deployed AI models to solve real-world problems.'
    ],
  },
  {
    role: 'EDUNET SHELL Skills4Future Green Skills & AI - Virtual Intern',
    company: 'Edunet Foundation',
    duration: 'Jul 2025 – Aug 2025',
    description: [
      'Applied AI to sustainability-focused projects.',
      'Collaborated on environmental data analysis and solution prototyping.'
    ],
  },
  {
    role: 'IBM SKILLBUILD AI & ML - Virtual Intern',
    company: 'Edunet Foundation',
    duration: 'Jun 2025 – Aug 2025',
    description: [
      'Developed machine learning models with a focus on ethical AI.',
      'Evaluated model performance using accuracy metrics and explainability tools.'
    ],
  },
  {
    role: 'SDE Intern',
    company: 'Bluestock™',
    duration: 'Jun 2025 – Aug 2025',
    description: [
      'Contributed to software development projects in a dynamic team environment.',
      'Gained hands-on experience in the full software development lifecycle.'
    ],
  },
  {
    role: 'Frontend Development Intern',
    company: 'Cognifyz Technologies',
    duration: 'Apr 2025',
    description: [
      'Implemented frontend components based on design specifications.',
      'Enhanced user interaction through responsive and accessible design.'
    ],
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'AI-powered Prompt Engineer',
    description: 'A tool that suggests improved prompts for AI tools to obtain better and more relevant outputs. Implements prompt templates, automatic refinement strategies, and evaluation metrics.',
    achievements: [
        'Improved AI output relevance by 25% during testing.',
        'Led to more consistent and contextually accurate results.'
    ],
    demoLink: 'https://ats-prompt-engineer.netlify.app/',
  },
  {
    title: 'AI-powered Chatbot for Students',
    description: 'An intelligent chatbot that helps students clarify doubts by understanding queries, retrieving relevant resources, and providing concise explanations. Built with conversational AI and NLP.',
    achievements: [
        'Handled over 500 test queries with an 88% correct response rate.',
        'Reduced average query resolution time by 40%.'
    ],
    demoLink: 'https://ats-chatbot.netlify.app/',
  },
  {
    title: 'Employee Salary Prediction Model',
    description: 'Predicts an employee\'s salary based on role and years of experience using regression techniques. Designed preprocessing, feature engineering, and model evaluation pipeline.',
    achievements: [
        'Achieved 92% prediction accuracy on test data.',
        'Reduced error rate by 15% compared to baseline model.'
    ],
    demoLink: 'https://ats-salary-prediction-project.onrender.com',
  },
];

export const PUBLICATIONS: PublicationItem[] = [
    {
        title: 'The Transformative Impact Of Artificial Intelligence On Professional Software Development: A Comprehensive Analysis',
        journal: 'Published in the proceedings of the International Conference on Software Engineering (ICSE) 2024.',
        link: 'https://ijcrt.org/download.php?file=IJCRT2508117.pdf'
    }
];

export const EDUCATION: EducationItem = {
    degree: 'B.Tech in Computer Science and Engineering (AI/ML)',
    institution: 'NRI Institute of Technology, Andhra Pradesh',
    duration: 'Expected: Mar 2028',
    details: 'SGPA: 8.29/10 (1st Year)',
};

export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'TCS iON Certified Young Professional' },
  { name: 'LinkedIn Learning – Prompt Engineering' },
  { name: 'Google Certified: Gemini for Data Scientists and Analysts' },
  { name: 'Microsoft Certified: Azure AI Fundamentals' },
  { name: 'IBM SkillBuild Certified: AI Foundations' },
];

// FIX: Add RESUME_DATA_FOR_AI to be used as context for the AiChat component.
const skillsString = SKILL_CATEGORIES.map(
  (category) =>
    `${category.title}:\n${category.skills.map((skill) => `- ${skill.name}`).join('\n')}`
).join('\n\n');

const experienceString = EXPERIENCE.map(
  (item) =>
    `Role: ${item.role} at ${item.company} (${item.duration})\n${item.description
      .map((d) => `- ${d}`)
      .join('\n')}`
).join('\n\n');

const projectsString = PROJECTS.map(
  (item) =>
    `Title: ${item.title}\nDescription: ${item.description}\nAchievements:\n${item.achievements
      .map((a) => `- ${a}`)
      .join('\n')}`
).join('\n\n');

const publicationsString = PUBLICATIONS.map(
  (item) => `Title: ${item.title}\nJournal: ${item.journal}`
).join('\n\n');

const educationString = `Degree: ${EDUCATION.degree}\nInstitution: ${EDUCATION.institution}\nDuration: ${EDUCATION.duration}\nDetails: ${EDUCATION.details}`;

const certificationsString = `Certifications:\n${CERTIFICATIONS.map((cert) => `- ${cert.name}`).join('\n')}`;

export const RESUME_DATA_FOR_AI = `
# Akkala Teja Swaroop's Resume Data

## About
A passionate and driven Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. Founder of OpportunitiX, a student-run initiative that empowers learners with access to exclusive career-building opportunities. Aims to become a versatile AI/ML engineer who builds intelligent systems that are impactful, inclusive, and future-ready.

## Skills
${skillsString}

## Experience
${experienceString}

## Projects
${projectsString}

## Publications
${publicationsString}

## Education
${educationString}

## Certifications
${certificationsString}
`;
