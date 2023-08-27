import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
