import type { ChildrenProps } from "../types/children.type"

const RepaymentsDisplay = ({children}:ChildrenProps) => {
  return (
    <div className="bg-[#133040] h-full mt-4 pt-10 xl:rounded-bl-[2.5em]  xl:mt-0">
        {children}
    </div>
  )
}

export default RepaymentsDisplay