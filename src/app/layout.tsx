import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavigationBar from "components/NavigationBar";
import { Suspense } from "react";
import Loading from "./loading";

const geistPoppins = Geist({
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manex: The Smartest Way to Manage and Grow",
  description: "A Cloud Based Application",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${geistPoppins.variable} antialiased`}
      >
        <NavigationBar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
