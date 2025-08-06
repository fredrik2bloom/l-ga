import type { Metadata } from "next";
import "./globals.css"; // Imports the global styles

export const metadata: Metadata = {
  title: "LÖGA",
  description: "A modern, scrollable website with video transitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}