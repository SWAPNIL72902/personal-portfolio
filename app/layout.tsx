import type { Metadata } from "next";
import { Inter, DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dm-serif" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Swapnil Pahari – Product & Analytics Portfolio",
  description: "Final-year BITS Pilani student at the intersection of product thinking and data-driven decision-making. Open to PM, analytics, and program management roles.",
  keywords: ["Product Management", "Data Analytics", "Program Management", "Systems Thinking", "BITS Pilani", "Finance Minor", "Licious Intern"],
  authors: [{ name: "Swapnil Pahari" }],
  openGraph: {
    title: "Swapnil Pahari – Product & Analytics",
    description: "I identify problems, dig into data, and build solutions that drive real impact.",
    type: "website",
    url: "https://swapnil-pahari.vercel.app",
    siteName: "Swapnil Pahari Portfolio",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${dmSans.variable} ${dmSerif.variable} ${jetBrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
