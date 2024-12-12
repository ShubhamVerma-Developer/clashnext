import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google"
import { cn } from "@/lib/utils";

import "./globals.css";


export const metadata: Metadata = {
  title: "Clashing app",
  description: "Get yoour audience thoughts ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")} >
        {children}
      </body>
    </html>
  );
}
