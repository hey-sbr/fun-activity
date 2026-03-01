import type { Metadata } from "next";
import "./globals.css";
import { Logo } from "@/component/Logo";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "CrowdApps App",
  description: "Fun activity app for CrowdApps",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} `}>
        <div className="relative flex h-screen items-center justify-center bg-[#bf2734] p-40 select-none">
          <Logo />

          <main className="flex flex-col font-montserrat items-center justify-between bg-white text-[#bf2734] p-10 rounded-2xl  h-full w-full shadow-2xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
