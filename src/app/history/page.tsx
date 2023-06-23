"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks";

const PageComponent: React.FC = () => {


  return (
    <div>
      <h4>Customer</h4>
      <button
        className="border-2 bg-gray-200 border-sky-500  w-[260px] h-10 m-2"
      >
        past services
      </button>
      <h4>service provider</h4>
      <button
        className="border-2 bg-gray-200 border-sky-500  w-[260px] h-10 m-2"
      >
        past services
      </button>

      <button
        className="border-2 bg-gray-200 border-sky-500  w-[260px] h-10 m-2"
      >
        today
      </button>
    </div>
  );
};

export default PageComponent;