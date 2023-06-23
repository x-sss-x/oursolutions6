//@ts-nocheck
import React from "react";
import LogoIcon from "../../public/Images/Header/Logo.png";
import Header from "./Header";
import Input from "./Input";
import Button, { ButtonExtendedProps } from './Button';

export default function PD(){
  const buttonProps: ButtonExtendedProps = {
    intent: 'primary',
   width:10,
  };
 
    return(
      <div className="w-screen">
            <Header logo={LogoIcon} />
          
            <div className="flex grid grid-cols-2">
            <Input inputVariant="email" placeholder="email@gmail.com" />
            </div>
            <div className="flex grid grid-cols-2">
            <Input inputVariant="username" placeholder="username" />
            </div>
            <div className="flex grid grid-cols-2">
            <Input inputVariant="phoneNumber" placeholder="phonenumber" />
            </div>
            <div className="flex grid grid-cols-1">
            <Input inputVariant="age" placeholder="age" />
            </div>
            <div className="flex grid grid-cols-1">
           
            <Input inputVariant="address" placeholder="address" />
            </div>
            <div className="flex grid grid-cols-1">
            <Input inputVariant="password" placeholder="password" />
          </div>
            <div className="flex grid grid-cols-1">
            <Input inputVariant="confirmPassword" placeholder="confirmpassword" />
          </div>
          <center>
            <Button {...buttonProps}>Create new account</Button>
 </center>
            </div>
            
           
               
    )
};