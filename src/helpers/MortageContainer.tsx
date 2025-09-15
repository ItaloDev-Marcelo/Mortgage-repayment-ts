import type { ChildrenProps } from '../types/children.type'

const MortageContainer = ({children}:ChildrenProps ) => {
  return (
    <div className='MortageContainer flex shadow-1xl flex-col justify-center items-center  relative xl:flex-row
    md:mx-auto md:top-10 bg-white md:w-[500px]  xl:top-25 lt:top-15 dt:top-40   xl:w-[850px] xl:h-[550px]  rounded-2xl overflow-hidden'>{children}</div>
  )
}

export default MortageContainer