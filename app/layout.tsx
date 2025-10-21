import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blackbox Quantum — Le chat qui vend et qui convainc",
  description: "Blackbox.ai réinvente la façon d'écrire du code : tu prompts, il planifie, génère, explique, teste et répare. Résultat : moins d'attente, plus de shipping.",
  keywords: ["AI", "chatbot", "code generation", "developer tools", "conversational AI"],
  authors: [{ name: "Blackbox Quantum" }],
  openGraph: {
    title: "Blackbox Quantum — Le chat qui vend et qui convainc",
    description: "Blackbox.ai réinvente la façon d'écrire du code : tu prompts, il planifie, génère, explique, teste et répare.",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#0B0B1D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
