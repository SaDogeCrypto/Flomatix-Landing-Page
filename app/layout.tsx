import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics } from "@/components/analytics"

export const metadata: Metadata = {
  title: "Flomatix - Creative Technology LLC",
  description:
    "Official legal, support, and platform-link resources for apps published by Creative Technology LLC.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
