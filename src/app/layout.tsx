import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";
import Script from "next/script";

import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

let title = "MeetMinds | Create Custom AI Agents for Live Calls";
let description = "Create custom AI agents, talk to them over live video, and get automatic transcripts, summaries, and searchable insights for every session.";
let url = "https://meetminds.app/";
let ogimage = "https://meetminds.app/og.png";
let siteName = "meetminds.app";
let logo = "https://meetminds.app/logo.svg";


export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName,
    images: [ogimage],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogimage],
  },
  icons: {
    icon: logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <TRPCReactProvider>
        <html lang="en">
          <head>
            <Script
              defer
              src="https://cloud.umami.is/script.js"
              data-website-id={process.env.NEXT_UMAMI_ID}
            />
          </head>
          <body
            className={` ${inter.className} ${dm_sans.variable} antialiased`}
          >
            <Toaster />
            {children}
          </body>
        </html>
      </TRPCReactProvider>
    </NuqsAdapter>
  );
}
