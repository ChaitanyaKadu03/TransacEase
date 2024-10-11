"use client"

import type { Metadata } from "next";
import { RecoilRoot } from "recoil"
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Providers } from "../components/sections/providers";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>
              {children}
            </Providers>
          </ThemeProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
