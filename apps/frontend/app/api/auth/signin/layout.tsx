import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Transacease - Secure Authentication",
  "description": "Log in securely to Transacease using Google Sign-In via Auth.js. Manage your personal or company financial activities with ease after quick and secure authentication.",
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
