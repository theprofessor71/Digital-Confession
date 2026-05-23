import type { Metadata } from "next";
import { Noto_Serif_Bengali, Inter } from "next/font/google";
import "./globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-serif-bengali",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "প্রতিদানহীন.পাতা.বাংলা — আত্মার কথা",
  description: "The most elegant, premium and heartfelt digital letter platform for unspoken, unrequited, silent and deep personal emotions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${notoSerifBengali.variable} ${inter.variable} font-body antialiased bg-parchment-texture text-ink dark:text-parchment transition-colors duration-300 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
