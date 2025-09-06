import type { InputRadio } from "../types/input.radio.type"

const InputRadios = ({value, register, name}:InputRadio) => {
  return (
    <div>
       <label>
           <input type='radio'  value={value} {...register(name)} />
           {value}
       </label>
    </div>
  )
}

export default InputRadios