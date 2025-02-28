import Image, { StaticImageData } from "next/image";
import logoIcon from "../../public/Images/Header/Logo.png";
import graph from "../../public/Images/Icons/graph.png";
import Link from "next/link";

interface HeaderProps {
  logo: StaticImageData;
}

export default function Header({ logo }: HeaderProps) {
  return (
    <div className="w-full xs:h-24 h-30 bg-blue-500 flex items-center justify-between">
      <div className="py-4 px-4">
        <Image src={logoIcon} alt="Logo" className="w-40 h-16 xs:w-28 xs:h-12" />
      </div>
      <div className="mr-6">
       <Link href="/dashboardSP"> <Image src={graph} alt="Back Icon" width={24} height={24} /></Link>
      </div>
    </div>
  );
}