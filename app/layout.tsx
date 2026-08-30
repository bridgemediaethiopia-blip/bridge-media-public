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
  title: "Bridge Media Ethiopia | Omnichannel Lead & Ad Platform",
  description:
    "Turn every TV commercial, Instagram post, and SMS campaign into real-time verified buyer leads across Ethiopia.",
  keywords: [
    "Bridge Media",
    "Bridge Media Ethiopia",
    "Ethiopia Advertising",
    "Lead Generation Ethiopia",
    "Omnichannel Marketing Addis Ababa",
    "Telebirr lead tracking",
  ],
  openGraph: {
    title: "Bridge Media Ethiopia | Omnichannel Lead & Ad Platform",
    description: "Your Ads Are Talking. We Make Them Sell.",
    siteName: "Bridge Media Ethiopia",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "M2v89DHb-OrcN_6goWO_75UQk3m59ofn7KbvqyJrFPE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}git add .
git commit -m "Update Google Search Console verification meta tag"
git push origin main