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

export const contactData: ContactData = {
  email: "praveen@example.com",
  linkedin: "linkedin.com/in/praveen",
  github: "github.com/praveen",
  resumeUrl: "#" // Intentionally left blank as per Stitch design placeholder
};
