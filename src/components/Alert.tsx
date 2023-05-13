import { VariantProps, cva } from "class-variance-authority";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineExclamationCircle } from "react-icons/ai";

export type AlertProps = VariantProps<typeof AlertBoxStyle>;

export const AlertBoxStyle = cva(
  "flex items-center justify-center bg-white shadow-lg rounded-3xl py-2 w-fit px-3",
  {
    variants: {
      variant: {
        success: "border-2 border-green-600 text-green-700",
        error: "border-2 border-red-600 text-red-700",
        warning: "border-2 border-secondary text-yellow-700",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

interface AlertExtendedProps extends AlertProps {
  children: string;
}

export default function Alert({
  children,
  variant,
  ...props
}: AlertExtendedProps) {
  return (
    <div className={AlertBoxStyle({ variant })} {...props}>
      <div className="px-2 text-lg">
        {variant === "success" && <AiOutlineCheckCircle />}
        {variant === "warning" && <AiOutlineExclamationCircle />}
        {variant === "error" && <AiOutlineCloseCircle />}
      </div>
      {children}
    </div>
  );
}