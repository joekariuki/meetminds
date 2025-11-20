import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";

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

export const metadata: Metadata = {
  title: "MeetMinds",
  description:
    "AI-powered agents for interactive video coaching and on-demand meeting sessions",
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
