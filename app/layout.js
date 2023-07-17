import "./globals.scss";
import { Inter } from "next/font/google";

import GNB from "./components/GNB";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seoul2u",
  description: "Your Best Shipping Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GNB />
        {children}
      </body>
    </html>
  );
}
