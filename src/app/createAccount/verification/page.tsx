"use client"
import React, { useState } from 'react';

const Verification = () => {
    const [code, setCode] = useState('');

    const handleChange = (event: any) => {
        const { value } = event.target;
        if (value.length <= 4) {
            setCode(value);
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Perform verification logic with the code
        console.log('Verification code:', Number);
        // Reset the code
        setCode('');
    };

    return (
        <div className="flex justify-center pt-20 h-screen">
            <form className="bg-white  rounded px-8 py-6" onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-center pb-4 text-3xl font-bold mb-2" htmlFor="code">
                        Verification
                    </label>
                <div className="mb-4">
                    <label className="block text-gray-700 text-center pt-2 pb-4 text-sm font-bold mb-2" htmlFor="code">
                        Enter verify code send to your email
                    </label>
                    <input
                        className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="code"
                        type="text"
                        placeholder="Enter code"
                        value={code}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 w-[260px] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                    <a href="/createAccount/sucess_acc"  >  Verify</a>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Verification;
