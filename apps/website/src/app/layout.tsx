import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/contexts/theme-provider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// METADATA
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST!),
  title: {
    default: "React Bionic Reading",
    template: "%s | React Bionic Reading",
  },
  description:
    "A react package that helps apply bionic reading / half bold formatting to your text",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <DotPattern className={cn(
              "-z-10 h-full dark:opacity-40",
            )} />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
