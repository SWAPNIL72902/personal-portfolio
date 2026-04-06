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
  description: "Senior Product & Analytics professional. Open to PM, analytics, and program management roles.",
  keywords: ["Product Management", "Data Analytics", "Program Management", "BITS Pilani", "Licious Intern"],
  authors: [{ name: "Swapnil Pahari" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${dmSans.variable} ${dmSerif.variable} ${jetBrainsMono.variable} antialiased bg-[#0a0a0f] text-[#e8e8f0] overflow-x-hidden min-h-screen selection:bg-[#e8c97a]/20 selection:text-[#e8c97a]`}>
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
