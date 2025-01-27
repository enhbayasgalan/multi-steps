"use client";

import { getFallbackRouteParams } from "next/dist/server/request/fallback-params";
import { useState, useEffect } from "react";
import { motion } from "motion/react"

export const StepOne = ({ setStep }) => {
  const [formValue, setFormValue] = useState(() => {
    // localStorage-оос авсан утгыг JSON.parse ашиглан хөрвүүлэх
    const step = localStorage.getItem("stepOne");
    if (typeof window !== 'undefined')
    return step ? JSON.parse(step) : { firstName: "", LastName: "", UserName: "" }; // initial values
  });
  console.log(formValue);
  
  const [errors, setErrors] = useState({});
  const [a, seta] = useState(false);

  useEffect(() => {
    // formValue өөрчлөгдсөн үед lcoalStorage-д хадгалах
    if (formValue.firstName || formValue.LastName || formValue.UserName) {
      localStorage.setItem("stepOne", JSON.stringify(formValue));
    }
  }, [formValue]); // formValue-ийг хамааруулсан байна, өөрчлөгдөх бүрт хадгалагдана

  const onContinue = () => {
    let valid = true; 
    if (!formValue.firstName || formValue.firstName.length === 0) {
      setErrors((prev) => ({ ...prev, firstName: "Нэрээ оруулна уу" }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, firstName: "" }));
    }

    if (!formValue.LastName || formValue.LastName.length === 0) {
      setErrors((prev) => ({ ...prev, LastName: "Овгоо оруулна уу." }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, LastName: "" }));
    }

    if (!formValue.UserName || formValue.UserName.length === 0) {
      setErrors((prev) => ({
        ...prev,
        UserName: "Хэрэглэгчийн нэрээ оруулна уу",
      }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, UserName: "" }));
    }

    if (valid) {
      seta(true);
      setStep(2);
    }
  };

  const onFirstNameChange = (e) =>{
    setFormValue({ ...formValue, firstName: e.target.value });
    if (!formValue.firstName || !formValue.firstName.length === 0) {
      setErrors((prev) => ({ ...prev, firstName: "" }));
    } 
  }
  const onLastNameChange = (e) =>{
    setFormValue({ ...formValue, LastName: e.target.value });
    if (!formValue.LastName || !formValue.LastName.length === 0) {
      setErrors((prev) => ({ ...prev, LastName: "" }));
    }
  }
  const onUserNameChange = (e) =>{
    setFormValue({ ...formValue, UserName: e.target.value });
    if (!formValue.UserName || formValue.UserName.length === 0) {
      setErrors((prev) => ({
        ...prev,
        UserName: "",
      }));
    }
  }

  

  
  
  return (
    
    <motion.div animate={{ x: [0, 100, 0] }} className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
      <div className="space-y-2 mb-7">
        <div className="flex">
          <img src="Pineconelogo.png" />
        </div>
        <div className="text-[26px] text-foreground font-semibold">
          Join Us! 😎
        </div>
        <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>
      </div>
      <div className="flex flex-col flex-grow gap-y-3">
        <div className="space-y-2">
          <label
            // for="firstName"
            className="text-sm font-semibold leading-4 text-[#334155]"
          >
            First name
            <span className="text-error">*</span>
          </label>
          <input
            onChange={onFirstNameChange}
            placeholder="Your first name"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] text-[#121316]"
            name="firstName"
            value={formValue.firstName
            }
          />
          {errors.firstName ? (
            <p className="text-red-500">{errors.firstName}</p>
          ) : (
            <></>
          )}
        </div>
        <div className="space-y-2">
          <label
            // for="LastName"
            className="text-sm font-semibold leading-4 text-[#334155]"
          >
            Last name
            <span className="text-error">*</span>
          </label>
          <input
            onChange={onLastNameChange}
            placeholder="Your last name"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] text-[#121316]"
            name="LastName"
            value={formValue.LastName}
          />
          {errors.LastName && <p className="text-red-500">{errors.LastName}</p>}
        </div>
        <div className="space-y-2">
          <label
            // for="UserName"
            className="text-sm font-semibold leading-4 text-[#334155]"
          >
            User name
            <span className="text-error">*</span>
          </label>
          <input
            onChange={onUserNameChange}
            placeholder="Your User name"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] text-[#121316]"
            name="UserName"
            value={formValue.UserName}
          />
          {errors.UserName && <p className="text-red-500">{errors.UserName}</p>}
        </div>
        <div className="flex w-full gap-x-2 mt-auto">
          <button
            onClick={onContinue}
            className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 "
          >
            Continue 1/3
            <img src="right.png" />
          </button>
        </div>
      </div>
    </motion.div>
    
  );
};
