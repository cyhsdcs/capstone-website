import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fund Transaction Prediction",
  description: "A Machine Learning-Based Model for Predicting Fund Transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-cyan-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Capstone Project
            </Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-200">Home</Link>
              <Link href="/website" className="hover:text-blue-200">Website</Link>
              <Link href="/dataset" className="hover:text-blue-200">Dataset</Link>
              <Link href="/methodology" className="hover:text-blue-200">Methodology</Link>
              <Link href="/results" className="hover:text-blue-200">Results</Link>
              <Link href="/demo" className="hover:text-blue-200">Demo</Link>
              <Link href="/documentation" className="hover:text-blue-200">Documentation</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            © 2025 Capstone Project
          </div>
        </footer>
      </body>
    </html>
  );
}
