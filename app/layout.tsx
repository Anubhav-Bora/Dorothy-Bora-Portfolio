import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dorothy Bora",
  description:
    "Management professional skilled in process optimization, leveraging data analytics to enhance operational efficiency and business performance.",
  openGraph: {
    title: "Dorothy Bora",
    description:
      "Management professional skilled in process optimization, leveraging data analytics to enhance operational efficiency and business performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
