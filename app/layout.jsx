import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // specify all weights available for Outfit
});

export const metadata = {
  title: "Movement Care PT",
  description: "Expert Therapy and Healing Massages in the Heart of Manhattan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div
        className="md:px-20">

      <Header />
        {children}
        <Toaster />
        </div>
        <Footer />
        </body>
        
    </html>
  );
}
