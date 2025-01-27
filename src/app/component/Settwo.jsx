"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react"

export const StepTwo = ({ setStep }) => {
  const [formValue, setFormValue] = useState(() => {
    const step = localStorage.getItem("stepTwo");
    if (typeof window !== 'undefined')
    return step ? JSON.parse(step) : {Email: "", PhoneNumber: "", Password: "", ConfirmPassword: ""};
  });
  console.log(formValue);
  
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false); // isValid нэртэй хувьсагч ашиглаж байгаа

  useEffect(() => {
    if (formValue.Email || formValue.PhoneNumber || formValue.Password || formValue.ConfirmPassword) {
      localStorage.setItem("stepTwo", JSON.stringify(formValue));
    }
  }, [formValue])

  const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const checkPhone = /^\+?\d{8}$/;

  const onContinue = () => {
    let isValidForm = true; // Тогтмол үр дүнг хадгалах хувьсагч

    // Email шалгах
    if (!formValue.Email || !checkEmail.test(formValue.Email)) {
      setErrors((prev) => ({
        ...prev,
        Email: formValue.Email ? "Зөв мэйл хаяг оруулна уу" : "Мэйл хаягаа оруулна уу",
      }));
      isValidForm = false;
    } else {
      setErrors((prev) => ({ ...prev, Email: "" }));
    }

    // Утасны дугаар шалгах
    if (!formValue.PhoneNumber || formValue.PhoneNumber.length !== 8 || !checkPhone.test(formValue.PhoneNumber)) {
      setErrors((prev) => ({
        ...prev,
        PhoneNumber: formValue.PhoneNumber ? "8 оронтой дугаар оруулна уу." : "Утасны дугаараа оруулна уу." || "Зөв утасны дугаар оруулна уу"
      }));
      isValidForm = false;
    } else {
      setErrors((prev) => ({ ...prev, PhoneNumber: "" }));
    }

    // Нууц үг шалгах
    if (!formValue.Password || formValue.Password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        Password: formValue.Password ? "Нууц үг 6 оронтой байх ёстой" : "Нууц үгээ оруулна уу",
      }));
      isValidForm = false;
    } else {
      setErrors((prev) => ({ ...prev, Password: "" }));
    }

    // Давхар нууц үг шалгах
    if (formValue.ConfirmPassword !== formValue.Password) {
      setErrors((prev) => ({
        ...prev,
        ConfirmPassword: "Таны оруулсан нууц үг таарахгүй байна." 
      }));
      isValidForm = false;
    } else {
      setErrors((prev) => ({ ...prev, ConfirmPassword: "" }));

    }

    // Хэрвээ бүх шалгалт амжилттай бол
    if (isValidForm) {
      setStep(3);
    }
  };

  const backButton = () => {
    setStep(1);
  };

  const onEmailChange = (e) => {
    setFormValue({ ...formValue, Email: e.target.value });
    if (!formValue.Email || !checkEmail.test(formValue.Email)) {
      setErrors((prev) => ({
        ...prev,
        Email: formValue.Email ? "" : "",
      }));
    }
  }
  const onPhoneNumberChange = (e) => {
    setFormValue({ ...formValue, PhoneNumber: e.target.value });
    if (!formValue.PhoneNumber || formValue.PhoneNumber.length !== 8 || !checkPhone.test(formValue.PhoneNumber)) {
      setErrors((prev) => ({
        ...prev,
        PhoneNumber: formValue.PhoneNumber ? "" : "" || ""
      }));
    }
  }
  const onPasswordChange = (e) => {
    setFormValue({ ...formValue, Password: e.target.value });
    if (!formValue.Password || formValue.Password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        Password: formValue.Password ? "" : "",
      }));
    }
  }
  const onConfirmPasswordChange = (e) => {
    setFormValue({ ...formValue, ConfirmPassword: e.target.value });
    if (formValue.ConfirmPassword !== formValue.Password) {
      setErrors((prev) => ({
        ...prev,
        ConfirmPassword: "" 
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
            Email
            <span className="text-error">*</span>
          </label>
          <input
            onChange={onEmailChange}
            placeholder="Your email"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] text-[#121316]"
            type="text"
            name="firstName"
            value={formValue.Email}
          />
          {errors.Email && <p className="text-red-500">{errors.Email}</p>}
        </div>
        <div className="space-y-2">
          <label
            // for="LastName"
            className="text-sm font-semibold leading-4 text-[#334155]"
          >
            Phone number
            <span className="text-error">*</span>
          </label>
          <input
            onChange={onPhoneNumberChange}
            placeholder="Your last name"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] text-[#121316]"
            type="text"
            name="LastName"
            value={formValue.PhoneNumber}
          />
          {errors.PhoneNumber && (
            <p className="text-red-500">{errors.PhoneNumber}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            // for="UserName"
            className="text-sm font-semibold leading-4 text-[#334155]"
          >
            Password
            <span className="text-error">*</span>
          </label>
          <input
            onChange={onPasswordChange}
            placeholder="Your User name"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] text-[#121316]"
            type="password"
            name="UserName"
            value={formValue.Password}
          />
          {errors.Password && <p className="text-red-500">{errors.Password}</p>}
        </div>
        <div className="space-y-2">
          <label
            // for="UserName"
            className="text-sm font-semibold leading-4 text-[#334155]"
          >
            Confirm password
            <span className="text-error">*</span>
          </label>
          <input
            onChange={onConfirmPasswordChange}
            placeholder="Your User name"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] text-[#121316]"
            type="password"
            name="UserName"
            value={formValue.ConfirmPassword}
          />
          {errors.ConfirmPassword && (
            <p className="text-red-500">{errors.ConfirmPassword}</p>
          )}
        </div>
        <div className="flex w-full gap-x-2 mt-auto">
          <button onClick={backButton} className="flex items-center justify-centert w-32 gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300">
            <img src="left.png"/>
            Back
          </button>
          <button
            onClick={onContinue}
            className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80"
          >
            Continue 2/3
            <img src="right.png" />
          </button>
        </div>
      </div>
    </motion.div>
    
  );
};
