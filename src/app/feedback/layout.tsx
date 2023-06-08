"use client"
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { viewFeedback } from "../../store/Feedback.silce";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(viewFeedback())
  },[dispatch])

  return (
    <div className={"flex h-full w-full items-center justify-center"}>
      {children}
    </div>
  );
}