import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBackground from "@/components/layout/PageBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#09090B] text-white antialiased">
        <PageBackground />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
