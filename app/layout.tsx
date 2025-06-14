import type React from "react"
import { Inter } from "next/font/google"
import { HeroUIProvider } from "@heroui/react"
import '@/styles/main.scss';
import '@/styles/globals.scss'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minna no Hologram",
  description: "Explore science, history, culture and DIY projects",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  )
}
