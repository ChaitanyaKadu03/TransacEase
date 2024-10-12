import Navbar from "@/components/sections/navbar";
import type { Metadata } from "next";
import { TooltipProvider } from '@/components/ui/tooltip'
import Header from "@/components/sections/header";
import { auth } from "../../../auth";

export const metadata: Metadata = {
  "title": "Transacease - Manage Your Transactions",
  "description": "Effortlessly track and manage all your financial activities from the Transacease Dashboard. Whether you’re an individual managing crypto, stocks, or a company overseeing corporate expenses, this dashboard offers a clear, user-friendly interface for effective financial management.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  if (!session.user) return null

  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <Navbar />
          <Header profile_img={session.user.image} user={session.user} />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
