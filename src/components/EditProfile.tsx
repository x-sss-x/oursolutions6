import React from "react";

import Inputs from "./Inputs";
import Button, { ButtonExtendedProps } from './Button';
export default function EditProfile(){
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
            <Inputs inputsVariant="age" placeholder="age" />
            </div>
            <div className="flex grid grid-cols-2">
            <Inputs inputsVariant="address" placeholder="address" />
            <Inputs inputsVariant="password" placeholder="password" />
            </div>
            <div className="flex grid grid-cols-2">
            <Inputs inputsVariant="confirmPassword" placeholder="confirmpassword" />
            
            </div>
       
            <center><Button {...buttonProps}>Updateinfo</Button>
            </center>
            </div>
            
          
    )
};