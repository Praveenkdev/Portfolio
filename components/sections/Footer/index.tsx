import * as React from "react"
import { FooterCopyright } from "./FooterCopyright"
import { FooterSocialLinks } from "./FooterSocialLinks"
import { BackToTopButton } from "./BackToTopButton"
import { footerData } from "@/data/footer"

export function FooterSection() {
  return (
    <footer className="w-full border-t border-outline-variant/10 bg-surface-container-lowest py-lg px-gutter relative mt-auto">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-sm">
        <FooterCopyright />
        <FooterSocialLinks />
        {footerData.backToTop && <BackToTopButton />}
      </div>
    </footer>
  )
}
