import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/Header'
import "./globals.css";
import Head from "next/head";
import Providers from '@/app/Providers'
import SearchBox from '@/components/SearchBox'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB clone",
  description: "this is movies website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>

    </html>
  );
}
