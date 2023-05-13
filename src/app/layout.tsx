import "../styles/globals.css"
import React from "react";
interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }