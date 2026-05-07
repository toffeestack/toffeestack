import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SiteShell } from "@/components/layout/site-shell";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "ToffeeStack",
  description: "Modern web development agency",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.variable}>
        <ScrollToTop />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}