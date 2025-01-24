"use client"
import { motion } from "motion/react"

export const StepFour = ({setStep}) => {
    
    return(
        <motion.div animate={{ x: [0, 100, 0] }} className="flex flex-col w-[480px]  p-8 bg-white rounded-lg space-y-2">
      <div className="space-y-2 mb-7">
        <div className="flex">
          <img src="Pineconelogo.png" />
        </div>
        <div className="text-[26px] text-foreground font-semibold">
          You're All Set! 🔥
        </div>
        <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
          We've received your submission. Thank you!
        </p>
      </div>
    </motion.div>
    )
}