"use client";
import { useState } from "react";
import { StepOne } from "./component/Setone";
import { StepTwo } from "./component/Settwo";
import { StepThree } from "./component/Setthree";
import { StepFour } from "./component/Setfour";

export default function Home() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      { step === 1 ? < StepOne  setStep={setStep} /> :<></>}
      { step === 2 ? < StepTwo setStep={setStep} /> :<></>}
      { step === 3 ? < StepThree setStep={setStep} /> :<></>}
      { step === 4 ? < StepFour setStep={setStep} /> :<></>}
    </div>
  );
}
