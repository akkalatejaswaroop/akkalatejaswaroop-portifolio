export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  achievements: string[];
  demoLink?: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    duration: string;
    details: string;
}

export interface CertificationItem {
    name: string;
}

export interface PublicationItem {
  title: string;
  journal: string;
  link: string;
}

// FIX: Add ChatMessage interface for use in AiChat component.
export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
