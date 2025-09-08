import type { InputProps } from "../types/Input.type"
import ErrorText from '../components/ErrorTxt'

const Input = ({register, error, name,title, subText, direction}:InputProps) => {
  return (
    <div>
        <label htmlFor='name'>{title}</label>
        <div className={direction === 'l' ? 'flex flex-row bg-red-400' : ' bg-purple-500'}>
            <input type='text' id='name' {...register(name)}  />
            <div>
               <span>{subText}</span> 
            </div>
        </div>
       {error &&  <ErrorText error={error[name]} />}
    </div>
  )
}

export default Input