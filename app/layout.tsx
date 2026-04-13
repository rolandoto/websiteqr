import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel zelva negra",
  description: "Portal de servicios para huéspedes: check-in, restaurante, minibar y concierge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
