import type React from "react"
import type { Metadata } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"
import Link from "next/link" // Import Link
import { MessageCircle } from "lucide-react" // Import a suitable icon

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
  // --- Replace with your actual WhatsApp number in international format (e.g., 60123456789) ---
  const whatsappNumber = "60123456789"; // REPLACE THIS NUMBER
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I'd like to start a project.")}`;
  // --- End Placeholder ---

  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />

        {/* --- Floating WhatsApp Button --- */}
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          <MessageCircle className="h-5 w-5" />
          Start a project
        </Link>
        {/* --- End Floating WhatsApp Button --- */}

        <Analytics />
      </body>
    </html>
  )
}