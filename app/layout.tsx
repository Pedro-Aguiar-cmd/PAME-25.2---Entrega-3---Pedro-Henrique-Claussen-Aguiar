import "./globals.css"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa de Eventos",
  description: "Site de gestão de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
