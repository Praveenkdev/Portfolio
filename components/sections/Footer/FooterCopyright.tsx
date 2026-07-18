import * as React from "react"
import { footerData } from "@/data/footer"

export function FooterCopyright() {
  return (
    <div className="font-body-md text-body-md text-on-surface-variant order-2 md:order-1 text-center md:text-left">
      {footerData.copyright}
    </div>
  )
}
