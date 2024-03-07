import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const appFont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abibo Mamudo",
  robots: "index, follow",
  keywords: [
    "Design gráfico",
    "edição de vídeo",
    "Adobe Premiere Pro",
    "Final Cut Pro",
    "DaVinci Resolve",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "tipografia",
    "cores",
    "layout",
    "composição",
    "design responsivo",
    "UX/UI",
    "logotipo",
    "identidade visual",
    "materiais de marketing",
    "infográficos",
  ],
  description:
    "I am a creative professional with experience in graphic design and video editing. I have proficiency in software such as Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, Photoshop, Illustrator and InDesign. I create original and creative designs for a variety of platforms, including print and digital. I also have experience in video editing for different formats, such as commercials, promotional videos, institutional videos, content for social networks, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="eng">
      <body className={appFont.className}>
        <main className="bg-[#111] text-white w-screen min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
