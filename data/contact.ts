export interface ContactData {
  email?: string;
  phone?: string;
  location?: string;
  timezone?: string;
  availability?: string;
  preferredContactMethod?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  resumeUrl?: string;
  calendlyUrl?: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
  x?: string;
  instagram?: string;
  medium?: string;
  devto?: string;
}

import { siteConfig } from "@/lib/site";

export const contactData: ContactData = {
  email: "praveen2004india@gmail.com",
  phone: "7010335981",
  location: "Chennai – 600078",
  linkedin: siteConfig.links.linkedin.replace("https://", ""),
  github: siteConfig.links.github.replace("https://", ""),
  resumeUrl: "" 
};
