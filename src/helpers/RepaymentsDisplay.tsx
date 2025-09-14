import type React from "react"

type RepaymentsDispalyProps ={
  children: React.ReactNode
}

const RepaymentsDisplay = ({children}:RepaymentsDispalyProps) => {
  
  return (
    <div className="bg-[#133040] h-full mt-4 pt-10 rounded-bl-[2.5em]  xl:mt-0">
        {children}
    </div>
  )
}

export default RepaymentsDisplay