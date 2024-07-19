import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dustin Soos',
  description: 'Dustin Soos Portfolio Website',
  authors: [{ name: 'Dustin Soos' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} text-gray-300 container mx-auto px-4 md:px-16 lg:px-32 bg-custom-black md:text-lg`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
