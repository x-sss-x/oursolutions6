import { VariantProps, cva } from "class-variance-authority";


export type UpdateProps = VariantProps<typeof UpdateBoxStyle>;

export const UpdateBoxStyle = cva(
  "flex items-center justify-center shadow-lg rounded-3xl py-2 w-fit px-3",
  {
    variants: {
      variant: {
        Update: "border-2 bg-sky-700 border-sky-700 text-black",
       
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
        
      </div>
      {children}
    </div>
  );
}