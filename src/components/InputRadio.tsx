import type { InputRadio } from "../types/input.radio.type"

const InputRadios = ({value, register, name}:InputRadio) => {
  return (
    <fieldset className="fieldset">
       <label className="input w-[380px]">
           <input type='radio'   value={value} className="mr-2 radio radio-xs" {...register(name)} />
           <span className="fieldset-legend mt-[-.5em] xl:mr-[1em] font-semibold">{value} </span>
       </label>
    </fieldset>
  )
}

export default InputRadios