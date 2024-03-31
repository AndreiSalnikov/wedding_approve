import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Приглашение на свадьбу - Андрей & Маргарита (31.05.2024)",
  description: "Жених и Невеста приглашают вас на свадьбу. Ваше приглашение:",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru">
      <body className={inter.className}>{children}</body>
      </html>
  );
}
