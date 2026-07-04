/**
 * Types representing data for Hind Alaa Fathy's Portfolio
 */

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'State Management' | 'Databases' | 'Cloud' | 'Tools';
  proficiency?: number; // percentage out of 100 for visual bars
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
  videoUrl?: string; // YouTube embed URL or similar video path
  screenshots?: string[]; // Multiple high-fidelity screenshots for carousel
  mockupType?: 'mobile' | 'tablet' | 'desktop'; // Frame style
}

export interface EducationItem {
  id: string;
  institution: string;
  department?: string;
  degree: string;
  grade?: string;
  gpa?: string;
  period: string;
  details?: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  details: string[];
  iconName: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer?: string;
  tags?: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
