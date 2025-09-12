import type { InputProps } from "../types/Input.type"
import ErrorText from '../components/ErrorTxt'

const Input = ({register, error, name, title, subText, direction}:InputProps) => {
  return (
    <fieldset className='fieldset'>
        <label className='fieldset-legend text-gray-500' htmlFor='name'>{title}</label>
        <div className={`
        ${direction === 'r' ? 'flex flex-row input  border-blue-200 relative ' :' input relative flex-row-reverse border-blue-200  md:w-[380px]'}  ${error?.[name]?.message ? 'border-red-400' :' border-blue-200' } 
        `}>
            <input type='text' id='name' {...register(name)} className={direction === 'l' ? 'pl-9' : ''}  />
            <div className={` p-2 px-4 h-[100%] cursor-auto 
              ${error?.[name]?.message ? 'bg-red-400' : ' bg-blue-200' }
              ${direction === 'r' ? 'absolute right-0 bg-blue-200 text-gray-500' : 'absolute left-0 bg-blue-200' }`}>
               <span className="font-medium text-[1em]">{subText}</span> 
            </div>
        </div>
       {error &&  <ErrorText error={error[name]} />}
    </fieldset>
  )
}

export default Input