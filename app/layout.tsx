import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#09090B] text-white antialiased">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
