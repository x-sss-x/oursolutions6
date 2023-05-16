import { VariantProps, cva } from "class-variance-authority";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineExclamationCircle } from "react-icons/ai";

export type RequestProps = VariantProps<typeof  RequestBoxStyle>;

export const  RequestBoxStyle = cva(
  "flex items-center justify-center shadow-lg rounded-3xl py-2 w-fit px-3",
  {
    variants: {
      variant: {
       accept: "border-2 bg-green-700 border-black text-white",
       reject:"border-2 bg-red-700 border-black text-white"
      },
    },
    defaultVariants: {
      variant: "accept",
    },
  }
);

interface  RequestExtendedProps extends  RequestProps {
  children: string;
}

export default function  Request({
  children,
  variant,
  ...props
}:  RequestExtendedProps) {
  return (
    <div className={ RequestBoxStyle({ variant })} {...props}>
      <div className="px-2 text-lg">
        {variant === "accept" && <AiOutlineCheckCircle />}
      {variant === "reject" && <AiOutlineCheckCircle/>}
      </div>
      {children}
    </div>
  );
}