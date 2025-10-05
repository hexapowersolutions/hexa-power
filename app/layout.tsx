import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "HEXA POWER SOLUTIONS — Victorian Energy Upgrades & Rebates",
  description:
    "Energy efficient Aircon, Heatpump, and Solar installations under Victorian rebate programs. Professional energy solutions for your home.",
  generator: "v0.app",
  alternates: {
    canonical: "https://hexapower.example/",
  },
  openGraph: {
    siteName: "HEXA POWER SOLUTIONS",
    title: "Victorian Energy Upgrades & Rebates | HEXA POWER SOLUTIONS",
    description: "Energy efficient Aircon, Heatpump, and Solar installations under Victorian rebate programs.",
    type: "website",
    url: "https://hexapower.example/",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victorian Energy Upgrades & Rebates | HEXA POWER SOLUTIONS",
    description: "Energy efficient Aircon, Heatpump, and Solar installations under Victorian rebate programs.",
    site: "@hexapower",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-white text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
