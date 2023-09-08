
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' شبکه اجتماعی نوشت ',
  description: 'Designed by Mojtaba Ahmedpour ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
      <link rel="icon" href="mark.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
