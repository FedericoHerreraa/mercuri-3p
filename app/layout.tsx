import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { WhatsappIcon } from "@/components/WhatsappIcon";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mercuri3P - Agile Consulting & Strategic Communication",
  description: "Transform your organization with agile methodologies and conscious communication. Expert consulting in digital transformation, strategic planning, and organizational development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        <Header />
        {children}
        <WhatsappIcon />
      </body>
    </html>
  );
}
