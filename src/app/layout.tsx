import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/separator"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"]
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "El Club RP - Servidor de Roleplay",
  description: "Un servidor de roleplay serio donde puedes vivir experiencias inmersivas en un ambiente organizado y entretenido."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${montserrat.variable} antialiased`}>
        <div className='min-h-screen bg-white'>
          <Navbar />
          <main className='pt-16'>{children}</main>
          <Separator />
          <Footer />
        </div>
        <div className='flex  bg-gradient-to-r from-orange-500 to-purple-700 h-10'></div>
      </body>
    </html>
  )
}
