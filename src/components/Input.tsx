import type { InputProps } from "../types/Input.type"
import ErrorText from '../components/ErrorTxt'

const Input = ({register, error, name,title, subText, direction}:InputProps) => {
  return (
    <fieldset className='fieldset'>
        <label className='fieldset-legend text-gray-500' htmlFor='name'>{title}</label>
        <div className={direction === 'r' ? 'flex flex-row input  border-blue-200 relative ' :
           '  input relative flex-row-reverse border-lime-400 w-[380px]'}>
            <input type='text' id='name' {...register(name)} className={direction === 'l' ? 'pl-9' : ''}  />
            <div className={` p-2 px-4 h-[100%] cursor-auto  ${direction === 'r' ? 'absolute right-0 bg-blue-200 text-gray-500' : 'absolute left-0 bg-lime-400' }`}>
               <span className="font-medium text-[1em]">{subText}</span> 
            </div>
        </div>
       {error &&  <ErrorText error={error[name]} />}
    </fieldset>
  )
}

export default Input