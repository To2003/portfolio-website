import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

/**
 * Root layout metadata for SEO and browser configuration.
 */
export const metadata: Metadata = {
  title: 'Portfolio | Developer',
  description: 'Personal portfolio showcasing my work and skills',
  icons: {
    icon: '/icon.png', 
    apple: '/icon.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {/* Page content wrapper */}
        {children}
        {/* Vercel analytics tracking */}
        <Analytics />
      </body>
    </html>
  )
}
