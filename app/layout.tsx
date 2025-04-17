import "./globals.css";
import { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DestiniGo",
  description:
    "DestiniGo is a trusted overseas education consultancy helping students achieve global success...",
  icons: {
    icon: "/images/logo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope antialiased`}>
        {children}
        <footer />
      </body>
    </html>
  );
}
