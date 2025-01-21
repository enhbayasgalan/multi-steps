"use client";
import { useState } from "react";

export default function Home() {
     // const [firstName, setFirstName] = useState("");
     const [formValue, setFormValue] = useState({});
     const [errors, setErrors] = useState({});
 
     const onContinue = () => {
      
         if (!formValue.firstName || formValue.firstName.length === 0) {
             setErrors((prev) => ({ ...prev, firstName: "Нэрээ оруулна уу" }));
         }
         if (!formValue.LastName || formValue.LastName.length === 0) {
             setErrors((prev) => ({ ...prev, LastName: "Нэрээ оруулна " }));
         }
     };
 
     const onFirstNameChange = (e) => setFormValue({...formValue, firstName: e.target.value });
     const onLastNameChange = (e) => setFormValue({...formValue, LastName: e.target.value });
  
     return(
         <div className="w-[480px] h-[700px] flex">
         <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
           <div className="space-y-2 mb-7">
             <div className="flex">
               <img src="Mai.png" />
             </div>
             <h2 className="text-[26px] text-red-600 font-bold">
               Join Us! 😎
             </h2>
             <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
               Please provide all current information accurately.
             </p>
           </div>
           <form className="flex flex-col flex-grow gap-y-3">
             <fieldset className="space-y-2">
               <label
                 // htmlfor="FirstName"
                 className="block text-sm font-semibold leading-4 text-[#334155]"
               >
                 First name 
                 <span className="text-error">*</span>
               </label>
               <input
                 type="text"
                 onChange={onFirstNameChange}
                 placeholder="your first name"
                 className="w-full p-3 text-base leading-5 rounded-md outline-error focus:outline-[#0CA5E9] text-[#121316] bg-slate-300"
                 name="firstName"
               />
               {errors.firstName && <p className="text-red-500">{errors.firstName}</p> }
             </fieldset>
             <fieldset className="space-y-2">
               <label
                 // htmlfor="lastName"
                 className="block text-sm font-semibold leading-4 text-[#334155]"
               >
                 Last name
               </label>
               <input
                 type="text"
                 onChange={onLastNameChange}
                 placeholder="your last name"
                 className="w-full p-3 text-base leading-5 rounded-md outline-error focus:outline-[#0CA5E9] text-[#121316] bg-slate-300"
                 name="LastName"
               />
               {errors.LastName &&<p className="text-red-500">{errors.LastName}</p>}
             </fieldset>
             <fieldset className="space-y-2">
               <label
                 // htmlfor="UserName"
                 className="block text-sm font-semibold leading-4 text-[#334155]"
               >
                 User name
               </label>
               <input
                 type="text"
                 placeholder="your username"
                 className="w-full p-3 text-base leading-5 rounded-md outline-error focus:outline-[#0CA5E9] text-[#121316] bg-slate-300"
                 name="UserName"
               />
             </fieldset>
             <div className="flex w-full gap-x-2 mt-auto">
               <button
                 onClick={onContinue}
                 className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80"
               >
                 Continue 1/3
                 <img src="сум.png"/>
               </button>
             </div>
           </form>
         </div>
       </div>
     )
}
