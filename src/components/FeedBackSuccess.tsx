import { VariantProps, cva } from "class-variance-authority";
import { RiCheckboxCircleFill } from "react-icons/ri";

export type FeedBackSuccessProps = VariantProps<typeof feedbackSuccessStyles>;

export const feedbackSuccessStyles = cva("mx-auto mt-[100px] flex flex-col w-1/2 h-60 xs:w-64 items-center rounded-xl justify-center bg-zinc-500", {
  variants: {
    size: {
      default: "",
    },
  },
});

interface FeedBackSuccessPropsExtended extends FeedBackSuccessProps {
  successText: string;
  descriptionText: string;
}

const FeedBackSuccess = ({ successText, descriptionText, ...props }: FeedBackSuccessPropsExtended): JSX.Element => {
  return (
    <div>

  <center>
 
    <div className={feedbackSuccessStyles()} {...props}>
    
      
        <RiCheckboxCircleFill className="text-black text-6xl" />
    
    
      
        <h1 className=" mt-2 text-center font-bold  text-black">
Updated successfully
                     
                                    </h1>
                         
        <p className="text-sm text-center text-gray-200">{descriptionText}</p>
      </div>
    
 
    </center>
    </div>
  );
};

export default FeedBackSuccess;