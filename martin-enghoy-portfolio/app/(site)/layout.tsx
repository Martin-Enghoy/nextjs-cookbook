import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "../globals.css";
import { cn } from "@/utils/util";
import { Header } from "@/components/Header";

const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Martin Enghoy | Dev Portfolio",
  description: "Welcome to Martin's Personal Corner of the Internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(ubuntuMono.className, "bg-dark-bg text-dark-text")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
