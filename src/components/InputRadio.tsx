import type { InputRadio } from "../types/input.radio.type"

const InputRadios = ({value, register, name}:InputRadio) => {
  return (
    <fieldset className={`fieldset`}>
       <label className={`input md:w-[380px] cursor-pointer border-blue-200 `}>
           <input type='radio' value={value} className="mr-2 radio   radio-xs
       border-gray-300
       checked:border-lime-400
       focus:ring-lime-400
    " {...register(name)} />
           <span className="fieldset-legend mt-[-.5em] xl:mr-[1em] font-semibold">{value} </span>
       </label>
    </fieldset>
  )
}

export default InputRadios