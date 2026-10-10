import "./globals.css";
import type { ReactNode } from "react";
import { SiteShell } from "../components/site-shell";

export const metadata = {
  title: "Tech Ghuru — Digital made to move you",
  description: "Independent digital studio for ambitious brands. Design, development and growth, thoughtfully connected.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#fff8f1] text-[#1e1b15] font-body-md antialiased selection:bg-[#9d4300] selection:text-white flex flex-col min-h-screen">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}


