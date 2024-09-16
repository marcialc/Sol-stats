import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "SOL STATS",
  description: "Real-time Solana insights and comments",
};

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`p-4 h-[100dvh] ${josefinSans.className}`}>
        {children}
      </body>
    </html>
  );
}
