import { VariantProps, cva } from "class-variance-authority";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineLock, AiOutlineArrowUp, AiOutlinePoweroff } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

export type InputsProps = VariantProps<typeof inputsStyles>;

export const inputsStyles = cva("relative flex items-center", {
  variants: {
    inputsVariant: {
      default: "bg-stone-200 border border-gray-300 rounded-lg px-4 py-2",
     email: "bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2",
     username: "bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2",
      phoneNumber: "bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2",
      idproof: "bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2",
      address: "bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2",
      specialisation: "bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2",
    password: "bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2",
      confirmPassword: "bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2",
     
     
    },
  },
});

interface InputsExtendedProps extends InputsProps {
  placeholder: string;
  inputsVariant?: "default" | "email" | "username" | "phoneNumber" | "idproof" | "address" |" specialisation"| "password" | "confirmPassword";
}

export default function Inputs({ placeholder, inputsVariant = "default", ...props }: InputsExtendedProps) {
  const renderIcon = () => {
    switch (inputsVariant) {
      case "email":
        return <AiOutlineMail className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case "username":
        return <AiOutlineUser className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case "phoneNumber":
        return <AiOutlinePhone className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case "idproof":
        return <AiOutlineArrowUp className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case "address":
        return <HiOutlineLocationMarker className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
        case " specialisation":
            return <AiOutlinePoweroff className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
        case "password":
      case "confirmPassword":
        return <AiOutlineLock className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
       
      default:
        return null;
    }
  };

  return (
    <div className={inputsStyles()}>
      <input
        type={inputsVariant === "password" || inputsVariant === "confirmPassword" ? "password" : "text"}
        placeholder={placeholder}
        className={inputsStyles({ inputsVariant })}
        {...props}
      />
      {renderIcon()}
    </div>
  );
}