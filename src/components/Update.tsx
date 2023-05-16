import { VariantProps, cva } from "class-variance-authority";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineExclamationCircle } from "react-icons/ai";

export type UpdateProps = VariantProps<typeof UpdateBoxStyle>;

export const UpdateBoxStyle = cva(
  "flex items-center justify-center shadow-lg rounded-3xl py-2 w-fit px-3",
  {
    variants: {
      variant: {
        Update: "border-2 bg-blue-500 border-blue-500 text-black",
       
      },
    },
    defaultVariants: {
      variant: "Update",
    },
  }
);

interface UpdateExtendedProps extends UpdateProps {
  children: string;
}

export default function Update({
  children,
  variant,
  ...props
}: UpdateExtendedProps) {
  return (
    <div className={UpdateBoxStyle({ variant })} {...props}>
      <div className="px-2 text-lg">
        {variant === "Update" && <AiOutlineCheckCircle />}
      
      </div>
      {children}
    </div>
  );
}