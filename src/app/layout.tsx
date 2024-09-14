import type { Metadata } from "next";
import { Londrina_Solid } from "@next/font/google";
import "./globals.css";

const londrina = Londrina_Solid({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-londrina", 
});


export const metadata: Metadata = {
  title: "$VODCAT - PAWS, RELAX AND HODL"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${londrina.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
