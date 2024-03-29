import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Navbar from './dashboard/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* SEO metadata */}
        <title>Your Workout and Wellness App</title>
        <meta name="description" content="Description of your app for SEO" />
        {/* Add more SEO-related metadata as needed */}
      </Head>
      <Navbar />
      {/* <Sidebar /> */}
      <main className="mt-14 mx-20 bg-graycolor text-black font-poppins">
        {children}
      </main>
    </html>
  );
}
