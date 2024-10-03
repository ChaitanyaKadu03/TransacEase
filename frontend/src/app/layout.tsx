import type { Metadata } from "next";
import { RecoilRoot } from "recoil"
import "./globals.css";

export const metadata: Metadata = {
  title: "TransacEase",
  description: "Managing transactions made super easy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
