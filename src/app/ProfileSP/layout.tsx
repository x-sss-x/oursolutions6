"use client"
import Logo from "../../../public/Images/Header/Logo.png";
import Header2 from "@/components/Header2";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="w-full">
        <Header2 logo={Logo} />
      {children}
    </div>
  );
}