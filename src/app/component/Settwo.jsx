"use client";

import { useState , useEffect} from "react";

export const StepTwo = ({ setStep }) => {
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});
  const [b, setb] = useState(false)
  const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const checkPhone = /^\+?\d{8}$/

  const onContinue = () => { // Email
    if (!formValue.Email || formValue.Email.length === 0) {
      setErrors((prev) => ({ ...prev, Email: "Мэйл хаягаа оруулна уу" }));
      setb(false)
    } else if (!formValue.Email || formValue.Email.length === 0){
       setErrors((prev) => ({ ...prev, Email: "Зөв мэйл хаяг оруулна уу" }));
       setb(false)
    } else {
        setErrors((prev) => ({ ...prev, Email: "" }));
        setb(true)
    } // phonenumber
    if (!formValue.PhoneNumber || formValue.PhoneNumber.length === 0) {
      setErrors((prev) => ({
        ...prev,
        PhoneNumber: "Утасны дугаараа оруулна уу."
      }));
      setb(false)
    } else if (!formValue.PhoneNumber || formValue.PhoneNumber.length === 0){
        setErrors((prev) => ({
            ...prev,
            PhoneNumber: "Зөв утасны дугаар оруулна уу"
          }));
        setb(false)
    } else {
        setErrors((prev) => ({
            ...prev,
            PhoneNumber: ""
          }));
        setb(true)
    } // password
    if (!formValue.Password || formValue.Password.length === 0) {
      setErrors((prev) => ({ ...prev, Password: "Нууц үгээ оруулна уу" }));
      setb(false)
    } else if (!formValue.Password || formValue.Password.length === 0){
        setErrors((prev) => ({ ...prev, Password: "6 оронтой тоо оруулна уу" }));
        setb(false)
    } else {
        setErrors((prev) => ({ ...prev, Password: "" }));
        setb(true)
    } // confirm password 
    if (!formValue.ConfirmPassword || formValue.ConfirmPassword.length === 0) {
      setErrors((prev) => ({
        ...prev,
        ConfirmPassword: "Нууц үгээ давтаж оруулна уу"
      }));
      setb(false)
    } else if(!formValue.ConfirmPassword || formValue.ConfirmPassword.length === 0){
        setErrors((prev) => ({
            ...prev,
            ConfirmPassword: "Таны оруулсан нууц үг таарахгүй байна."
        }));
        setb(true)
    } else {
        setErrors((prev) => ({
            ...prev,
            ConfirmPassword: ""
        }));
        setb(true)
    }
    console.log(b)
    if (b) {
        setStep(3);
    }
  };

  function checkemail (email){
    return checkEmail.test(email)
  }
  

  const backbutton = () =>{
    setStep(1);
  }

  const onEmailChange = (e) =>
    setFormValue({ ...formValue, Email: e.target.value });
  const onPhoneNumberChange = (e) =>
    setFormValue({ ...formValue, PhoneNumber: e.target.value });
  const onPasswordChange = (e) =>
    setFormValue({ ...formValue, Password: e.target.value });
  const onConfirmPasswordChange = (e) =>
    setFormValue({ ...formValue, ConfirmPassword: e.target.value });

  return (
    
    <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
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
            type="text"
            name="UserName"
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
            type="text"
            name="UserName"
          />
          {errors.ConfirmPassword && (
            <p className="text-red-500">{errors.ConfirmPassword}</p>
          )}
        </div>
        <div className="flex w-full gap-x-2 mt-auto">
          <button onClick={backbutton} className="flex items-center justify-centert w-32 gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300">
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
    </div>
    
  );
};
