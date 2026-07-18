import * as React from "react"
import { footerData } from "@/data/footer"

export function FooterSocialLinks() {
  if (!footerData.socialLinks || footerData.socialLinks.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center gap-md order-1 md:order-2">
      {footerData.socialLinks.map((link) => (
        <a 
          key={link.platform}
          href={link.url}
          target={link.url.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="font-display text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
          aria-label={`Visit my ${link.platform}`}
        >
          {link.platform}
        </a>
      ))}
    </nav>
  )
}
