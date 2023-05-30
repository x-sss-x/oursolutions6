import { VariantProps, cva } from "class-variance-authority";


export type AcceptRejectProps = VariantProps<typeof  AcceptRejectBoxStyle>;

export const  AcceptRejectBoxStyle = cva(
  "flex items-center justify-center shadow-lg rounded-3xl py-2 w-fit px-3",
  {
    variants: {
      variant: {
       accept: "border-2 bg-green-700 border-black text-white h-[50px] w-[130px]",
       reject:"border-2 bg-red-700 border-black text-white h-[50px] w-[130px]"
      },
    },
    defaultVariants: {
      variant: "accept",
    },
  }
);

interface  AcceptRejectExtendedProps extends  AcceptRejectProps {
  children: string;
}

export default function  AcceptReject({
  children,
  variant,
  ...props
}:  AcceptRejectExtendedProps) {
  return (
    <div className={ AcceptRejectBoxStyle({ variant })} {...props}>
      <div className="px-2 text-lg">
      
      </div>
      {children}
    </div>
  );
}