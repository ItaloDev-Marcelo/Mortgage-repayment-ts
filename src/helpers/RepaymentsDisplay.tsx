import type React from "react"

type RepaymentsDispalyProps ={
  children: React.ReactNode
}

const RepaymentsDisplay = ({children}:RepaymentsDispalyProps) => {
  
  return (
    <div className="bg-[#133040] mt-4">
        {children}
    </div>
  )
}

export default RepaymentsDisplay