import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "ToffeeStack",
  description: "Modern web development agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.variable}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}