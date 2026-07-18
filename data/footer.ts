import { contactData } from "./contact"

export interface FooterData {
  copyright: string;
  tagline?: string;
  email?: string;
  location?: string;
  navigationLinks?: {
    label: string;
    url: string;
  }[];
  socialLinks?: {
    platform: string;
    url: string;
    icon?: string;
  }[];
  legalLinks?: {
    label: string;
    url: string;
  }[];
  acknowledgements?: string;
  backToTop?: boolean;
  buildVersion?: string;
  lastUpdated?: string;
}

export const footerData: FooterData = {
  copyright: "© 2024 Designed and Developed by Praveen Kumar",
  backToTop: true,
  socialLinks: [
    { platform: "GitHub", url: contactData.github ? `https://${contactData.github}` : "#" },
    { platform: "LinkedIn", url: contactData.linkedin ? `https://${contactData.linkedin}` : "#" },
    { platform: "Email", url: contactData.email ? `mailto:${contactData.email}` : "#" }
  ]
};
