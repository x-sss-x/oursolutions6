import "./globals.css";
import { Inter } from "next/font/google";

const impira = Inter({
  weight: "400",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[100vw] h-[100vh]" style={impira.style}>
        {children}
      </body>
    </html>
  );
}