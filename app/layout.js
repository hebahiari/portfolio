import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Portfolio - Heba A.",
  description: "Web Dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
