import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechSnitch | AI Operating System For Execution",
  description: "A multi-agent execution platform where intelligent agents connect systems, make decisions, and execute enterprise tasks at scale.",
  openGraph: {
    title: "TechSnitch | Enterprise AI Operating System",
    description: "A multi-agent execution platform where intelligent agents connect systems, make decisions, and execute enterprise tasks at scale.",
    url: "https://techsnitch.co",
    siteName: "TechSnitch",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased bg-black text-white`}
    >
      <body className="relative min-h-full flex flex-col font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
