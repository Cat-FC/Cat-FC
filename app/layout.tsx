import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cat-FC | Java Backend & Agent Developer",
  description:
    "Java 后端工程师个人主页，展示后端开发、RAG、MCP、Agent 与全栈工程能力。",
  openGraph: {
    title: "Cat-FC | Java Backend & Agent Developer",
    description:
      "Backend systems, RAG, MCP, Agent engineering, Java, Python, Go, C/C++ and modern frontend.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat-FC | Java Backend & Agent Developer",
    description:
      "Backend systems, RAG, MCP, Agent engineering and full-stack development.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
