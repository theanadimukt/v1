import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sagar Patel — Full Stack Developer",
  description:
    "Backend-focused Full Stack Developer with 8+ years of experience in Laravel, React, Node.js, and Kubernetes. Based in London, UK.",
  keywords: [
    "Full Stack Developer",
    "Laravel",
    "React",
    "Node.js",
    "Kubernetes",
    "Backend Developer",
    "London",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${dmSans.variable}`}>
        <div className="dot-grid" />
        <div className="site-wrapper">{children}</div>
      </body>
    </html>
  );
}
