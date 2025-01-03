import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ModalProvider from "@/providers/ModalProvider";
import Image from "next/legacy/image";
import Abstarct from "../public/images/Absss.jpeg"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Canal Informatique",
  description: "your ultimate gadgets shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased hide-scrollbar",
          fontSans.variable
        )}
      >

      <div className='w-full min-h-screen fixed -z-10'>
            <Image
              src={Abstarct}
              alt="Your Image Description"
              layout="fill"
              objectFit="cover"
              className="z-[-10]"
            />
            <div className="absolute inset-0 backdrop-blur-xl bg-[#020617]/30"></div>
      </div>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModalProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
