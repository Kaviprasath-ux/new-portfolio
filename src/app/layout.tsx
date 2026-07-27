import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter } from "@/lib/fonts";

const SITE_URL = "https://kaviprasath.online";
const TITLE = "Kavi Prasath — Product Designer · Enterprise SaaS & GRC";
const DESCRIPTION =
  "I design the regulated workflows most teams avoid — governance, tax, SAP and ERP — and ship them as working Next.js front-ends.";
const OG_IMAGE = "/projects/enterprise-tax-platform/cover.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Kavi Prasath",
    "Product Designer",
    "Enterprise SaaS",
    "GRC",
    "UX Architecture",
    "Portfolio",
    "Design",
  ],
  authors: [{ name: "Kavi Prasath", url: SITE_URL }],
  creator: "Kavi Prasath",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Kavi Prasath",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 3232,
        height: 2528,
        alt: "Kavi Prasath — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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
