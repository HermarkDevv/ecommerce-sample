import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "sonner"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Hermark Shop",
  description: "Hermark Shop is an e-commerce platform for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`mx-auto w-full`}
      >
        <header>
          <Header />
        </header>
        <main>
          {children}
          <Toaster position="top-right" richColors />
          <Script
            src="https://js.paystack.co/v1/inline.js"
            strategy="afterInteractive"
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>

    </html>
  );
}
