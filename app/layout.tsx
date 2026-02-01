import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Linux Helper - Installation & Troubleshooting Guide',
  description: 'Comprehensive Linux installation, terminal, and troubleshooting guide for developers. Learn Bash, fix common errors, and master Linux system administration.',
  generator: 'v0.app',
  keywords: 'Linux, Ubuntu, Fedora, terminal, troubleshooting, installation, bash, shell',
  openGraph: {
    title: 'Linux Helper - Installation & Troubleshooting Guide',
    description: 'Master Linux development with our comprehensive guide to installation, terminal usage, and error resolution.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1727042318749362"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google AdSense Account Meta */}
        <meta name="google-adsense-account" content="ca-pub-1727042318749362" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
