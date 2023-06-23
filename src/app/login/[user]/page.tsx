"use client"
import LoginWithGoogle from "@/components/LoginWithGoogle";
import Button from "@/components/Button";
import Link from "next/link";
import React, { FormEvent, useState } from 'react';
const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(_event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex justify-center  items-center h-screen" >
      <form className="w-full max-w-md bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <h1 className="font-bold text-xl text-center m-4">
        Log into the existing account
      </h1>
      <div className="mb-6">
        
          <input
            className="appearance-none border rounded w-full bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="appearance-none border rounded w-full py-2 bg-gray-200 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          
          <input
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
      <div className="m-3">
        <Link href="/login/sucess"><Button> Sign in</Button></Link> 
      </div>
      <h2 className="text-center text-xl m-2"> or </h2>
      <div className="" >
      <LoginWithGoogle/>
      <Link href="../forgotpage/Forgotpassstep1" >
      <p className="ml-28 text-center text-sm text-sky-600 mb-4">
        forgot password?
      </p>
      </Link>

      </div>
      <div>
      <h1 className="font-bold text-lg text-center">
        Dont have an account?
      </h1>
      <Link href="../createAccount/">
      <h3 className=" text-center text-md text-sky-600">
           <a href="/createAccoun"> sign up</a>
      </h3>
      </Link>
      </div></form>
    </div>

  );
};

export default Login;


