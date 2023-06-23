import Image from "next/image";
import Button from "@/components/Button";
import successImage from "../../../../public/Images/Icons/successfull.png"
const page = () => {
  return (
    <div className="pt-4"><div className="pt-20">
      <div className="flex justify-center item-center ">
      <Image
        src={successImage}
        className="w-50 h-50"
        alt="Successfull"
      /></div><div className="flex justify-center item-center">
      <h3>Successfully created account</h3></div>
      <a href="http://localhost:3000/Homepage/"><Button>Continue</Button></a>
    </div> </div>
  );
};

export default page;
