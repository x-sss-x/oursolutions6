import React from "react";
import Button, { ButtonExtendedProps } from './Button';
import Inputs from "./Inputs";
export default function EditProfileS(){
  const buttonProps: ButtonExtendedProps = {
    intent: 'primary',
   width:9,
  };
    return(
      <div>
          
            <div className="flex grid grid-cols-2">
            <Inputs inputsVariant="email" placeholder="email@gmail.com" />
            <Inputs inputsVariant="username" placeholder="username" />
            </div>
            <div className="flex grid grid-cols-2">
            <Inputs inputsVariant="phoneNumber" placeholder="phonenumber" />
            <Inputs inputsVariant ="idproof" placeholder="idproof" />
            </div>
            <div className="flex grid grid-cols-2">
            <Inputs inputsVariant="address" placeholder="address" />
            <Inputs inputsVariant="password" placeholder="password" />
            </div>
            <div className="flex grid grid-cols-2">
            <Inputs inputsVariant="confirmPassword" placeholder="confirmpassword" />
            <Inputs inputsVariant="specialization" placeholder="specialization" />
            </div>
            <center><Button {...buttonProps}>Updateinfo</Button>
            </center>
            </div>
            
               
    )
};