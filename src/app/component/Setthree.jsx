"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react"


export const StepThree = ({ setStep }) => {
  const [formValue, setFormValue] = useState({
    profilePicture: null,
    DayBirth: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(true); // Хэрэглэгчийн өгөгдлийг шалгах хувьсагч

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const onContinue = () => {
    let isValid = true; // Шалгалтын үр дүнг хадгалах хувьсагч

    // Төрсөн өдрийн шалгах
    if (!formValue.DayBirth || formValue.DayBirth.length === 0) {
      setErrors((prev) => ({
        ...prev,
        DayBirth: "Төрсөн өдрөө оруулна уу",
      }));
      isValid = false;
    } else {
      const birthDate = new Date(formValue.DayBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        setErrors((prev) => ({
          ...prev,
          DayBirth: "Та 18 ба түүнээс дээш настай байх ёстой.",
        }));
        isValid = false;
      } else {
        setErrors((prev) => ({ ...prev, DayBirth: "" }));
      }
    }

    // Профайл зураг шалгах
    if (!formValue.profilePicture) {
      setErrors((prev) => ({ ...prev, image: "Профайл зурагаа оруулна уу" }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, image: "" }));
    }

    // Хэрэв бүх шалгалт зөв бол дараагийн алхам руу шилжих
    if (isValid) {
      setStep(4);
    }
  };

  const backbutton = () => {
    setStep(2);
  };

  const imageOnchange = (e) => {
    setFormValue({ ...formValue, profilePicture: e.target.files[0] });
    if (!formValue.profilePicture) {
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const onDayBirthChange = (e) => {
    setFormValue({ ...formValue, DayBirth: e.target.value });
    if (!formValue.DayBirth || !formValue.DayBirth.length === 0) {
      setErrors((prev) => ({
        ...prev,
        DayBirth: "",
      }));
    }
    
  };

  const close = () => {
    setFormValue({ ...formValue, profilePicture: null });
  }

  return (
    <motion.div animate={{ x: [0, 100, 0] }}  className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
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
          <label className="text-sm font-semibold leading-4 text-[#334155]">
            Date of birth
            <span className="text-red-500">*</span>
          </label>
          <input
            onChange={onDayBirthChange}
            type="date"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[$0CA5E9] text-[#121316]"
          />
          {errors.DayBirth && <p className="text-red-500">{errors.DayBirth}</p>}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold leading-4 text-[#334155]">
            Profile image
            <span className="text-red-500">*</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-[180px] border rounded-md border-soslid">
            {formValue.profilePicture ? (
              <>
                <img
                className="w-[416px] h-[180px] h-full rounded-md border-solid"
                src={URL.createObjectURL(formValue.profilePicture)}
              />
                 <button onClick={close} className="absolute  w-6 h-6 bg-[#202124] rounded-full ">
              <img className="close.png"/>
            </button></>
            
            ): 
            (<>
              <input onChange={imageOnchange} type="file" name="profileImage" />
            </>)
            }

         
          </div>
          {errors.image && <p className="text-red-500">{errors.image}</p>}
        </div>
      </div>

      <div className="flex w-full gap-x-2 mt-auto">
        <button
          onClick={backbutton}
          className="flex items-center justify-centert w-32 gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300"
        >
          <img src="left.png" />
          Back
        </button>
        <button
          onClick={onContinue}
          className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80"
        >
          Continue 3/3
          <img src="right.png" />
        </button>
      </div>
    </motion.div>
  );
};


