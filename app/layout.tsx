import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Diagnóstico de Pensamento Intrusivo",
  description: "Quiz de autoavaliação para qualificar leads para o método Pensamento Intrusivo."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={lato.variable}>
      <body>{children}</body>
    </html>
  );
}
