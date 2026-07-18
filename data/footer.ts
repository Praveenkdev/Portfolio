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
  socialLinks: (() => {
    const links = [];
    if (contactData.github) links.push({ platform: "GitHub", url: `https://${contactData.github}` });
    if (contactData.linkedin) links.push({ platform: "LinkedIn", url: `https://${contactData.linkedin}` });
    if (contactData.email) links.push({ platform: "Email", url: `mailto:${contactData.email}` });
    return links;
  })()
};
