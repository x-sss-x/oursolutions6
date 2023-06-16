"use client"
import Logo from "../../../public/Images/Header/Logo.png";
import Header3 from "@/components/Header3";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="w-full">
        <Header3 logo={Logo} />
      {children}
    </div>
  );
}