import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Kavi Prasath | UI/UX Designer",
  description: "Crafting digital experiences that inspire. UI/UX Designer specializing in product design, mobile apps, and design systems.",
  keywords: ["UI/UX Designer", "Product Designer", "Kavi Prasath", "Portfolio", "Design"],
  authors: [{ name: "Kavi Prasath" }],
  openGraph: {
    title: "Kavi Prasath | UI/UX Designer",
    description: "Crafting digital experiences that inspire.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavi Prasath | UI/UX Designer",
    description: "Crafting digital experiences that inspire.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
