import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headstarter Chatbot",
  description: "Headstarter 2024 Project 3: AI Customer Support.\nDeveloped by: Esat Adiloglu, Nathaniel Escaro, Ryan Eshan, Saikarthik Mummadisingu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary bg-gradient-to-r from-accent via-primary to-accent`}>
        {children}
      </body>
    </html>
  );
}
