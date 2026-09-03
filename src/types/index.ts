export interface ScreenshotItem {
  id: string;
  label: string;
  caption?: string;
  src?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemStatement?: string;
  solutionStatement?: string;
  keyFeatures?: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  developedByNote?: string;
  isFeaturedCaseStudy?: boolean;
  screenshots?: ScreenshotItem[];
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EducationItem {
  stage: string;
  institution: string;
  logoUrl?: string;
  degreeOrCourse: string;
  qualification: string;
  scoreLabel: string;
  scoreValue: string;
  timeline?: string;
  status?: string;
  location?: string;
  isCurrent?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  logoUrl?: string;
  certificateUrl?: string;
  verificationUrl?: string;
}
