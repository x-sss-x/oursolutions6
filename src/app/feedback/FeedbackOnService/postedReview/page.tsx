import FemalePhoto from "../../../../../public/Images/Review/Female.png";
import Image from "next/image";

import emptyStarImage from "../../../../../public/Images/Review/star-empty.png";
import fullStarImage from "../../../../../public/Images/Review/star-filled.png";
import halfStarImage from "../../../../../public/Images/Review/star-half-filled.png";
import Button from "@/components/Button";
import Link from "next/link";
import Review from "@/components/Review";
import profile from "../../../../../public/Images/Profile/profile.png"

var PostedReview = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src={FemalePhoto} alt="female" className="my-3 w-80 h-60" />
      <p className="text-sky-600 font-bold ">BIKE RIDE SERVICE</p>
      <div className="my-3">
       
      </div>
     

      <div>
        <Review
        icon={profile}
        name="John Doe"
        id="123"
        date="2023-05-15"
        time="12:30AM"
        rating={5}
        reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum ullamcorper ante ut pharetra."
      /> 
      </div>
      <div className="mt-2 auto-max">
      <Review
        icon={profile}
        name="Das"
        id="98765"
        date="2023-05-10"
        time=" 9:00 AM"
        rating={4.5}
        reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum ullamcorper ante ut pharetra."
      /> 
      </div>
      <div className="mt-2 auto-max">
      <Review
        icon={profile}
        name="Roy"
        id="6778"
        date="2023-03-15"
        time=" 10:00 AM"
        
        rating={3.9}
        reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum ullamcorper ante ut pharetra."
      /> 
      </div>
      <div className="mt-2 auto-max">
      <Review
        icon={profile}
        name="Varshitha"
        id="9822"
        date="2023-03-15"
        time="07:00AM"

        rating={0.5}
        reviewText="Amazing ride! We rented one avenger and one impulse ..both the bikes were in good condition
         .."
      /> 
      </div>
   
   
      <div className="my-5">
        <Link href="./feedback/FeedbackOnService/successfull">
          {" "}
         
        </Link>
      </div>
    </div>
  );
};

export default PostedReview;