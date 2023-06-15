"use client"
import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Perform form submission logic here
    console.log('Submitting form...');
  };

  return (
    <div className="flex justify-center  items-center h-screen">
      <form className="w-full max-w-md bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
            className="appearance-none border rounded w-full py-2 bg-gray-200 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          
          <input
            className="appearance-none border rounded w-full py-2 bg-gray-200 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="text"
            placeholder="Age"
            value={age}
            onChange={e => setAge(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
         
          <input
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
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
        <div className="mb-6">
          
          <input
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center mb-6 justify-center">
          <button
            className=" bg-blue-500 hover:bg-sky-700 text-white   font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
           <a href="/createAccount/verification"> Create Account</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
