import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coopstar Express | Motoboy e Entregas Rápidas em São Paulo",
  description:
    "Coopstar Express – serviços de motoboy, moto frete, delivery e entregas rápidas em São Paulo capital e Grande SP. Atendimento 24h, 7 dias por semana.",
  keywords:
    "motoboy São Paulo, moto frete, delivery, entregas rápidas, Coopstar Express, coleta e entrega SP",
  openGraph: {
    title: "Coopstar Express | Motoboy e Entregas Rápidas em São Paulo",
    description:
      "Entregas expressas, moto frete e delivery em São Paulo. Mais de 9 anos de experiência. Atendimento 24h.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
  themeColor: "#1B4F72",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
