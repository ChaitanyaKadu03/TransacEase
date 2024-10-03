import Navbar from "@/components/sections/navbar";
import type { Metadata } from "next";
import { TooltipProvider } from '@/components/ui/tooltip'
import Header from "@/components/sections/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <Navbar />
          <Header />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
