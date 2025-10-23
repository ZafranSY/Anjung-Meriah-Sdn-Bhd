import type React from "react"
import type { Metadata } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anjung Meriah Sdn. Bhd. - Solar Energy Solutions Malaysia",
  description:
    "Leading solar EPCC company in Malaysia since 1987. Trusted partner for residential, commercial, and industrial solar systems. SEDA RPVSP, CIDB G7, ISO 9001:2015 certified.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
