import React from "react";
import LogoIcon from "../../public/Images/Header/Logo.png";
import Header from "./Header";
import Input from "./Input";
import Button, { ButtonExtendedProps } from './Button';
export default function EditProfile(){
  const buttonProps: ButtonExtendedProps = {
    intent: 'primary',
   width:9,
  };
    return(
      <div className="w-screen">
            <Header logo={LogoIcon} />
            <div className="flex grid grid-cols-2">
            <Input inputVariant="email" placeholder="email@gmail.com" />
            <Input inputVariant="username" placeholder="username" />
            </div>
            <div className="flex grid grid-cols-2">
            <Input inputVariant="phoneNumber" placeholder="phonenumber" />
            <Input inputVariant="age" placeholder="age" />
            </div>
            <div className="flex grid grid-cols-2">
            <Input inputVariant="address" placeholder="address" />
            <Input inputVariant="password" placeholder="password" />
            </div>
            <div className="flex grid grid-cols-2">
            <Input inputVariant="confirmPassword" placeholder="confirmpassword" />
            
            </div>
       
            <center><Button {...buttonProps}>Updateinfo</Button>
            </center>
            </div>
               
    )
};