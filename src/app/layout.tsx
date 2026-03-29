import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Cartão Rede Social",
  description: "Desafio Frontend Fusion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" // Se o seu projeto for em português, lembre-se de trocar para "pt-BR"
      // Removemos as variáveis do Geist daqui, mantendo as classes de formatação
      className="h-full antialiased" 
    >
      {/* 3. Injetamos o inter.className junto com as classes que você já tinha no body */}
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}