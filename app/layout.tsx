import type { Metadata } from "next";
import { DM_Sans, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Anytime Spanish — Practice Spanish Like a Conversation",
  description:
    "Voice-first Spanish practice that feels like a relaxed chat in a sun-drenched plaza — not a classroom drill.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslon.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
