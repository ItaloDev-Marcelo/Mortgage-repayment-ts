
import type { MortgageForm } from '../schema/zodSchema';
import Input from './Input'
import Calculator from '../assets/icon-calculator.svg'
import InputRadios from './InputRadio';
import type { FormProps } from '../types/Form.type';


const Form = ({register,handleSubmit, errors, reset}:FormProps) => {
  const resetForm = () => {
     reset()
  }

  const formResult = (data: MortgageForm) => {
       console.log('formResult:', data)
  }


  return (
    <form onSubmit={handleSubmit(formResult)}>
         <div>
           <legend>Mortgage Calculator</legend>  <button onClick={resetForm}>Clear All</button>
         </div>
         <Input register={register} error={errors} 
          name='mortgageAmount' title='Mortgage Amount'
          subText='£' direction='l' />
         <div>
         <Input register={register} error={errors}
          name='mortgageTerm' title='Mortgage Term '
          subText='years' direction='r'
         />
         <Input register={register} error={errors}
          name='mortgageRate' title='Interest Rage '
          subText='%' direction='r'  />
         </div>

         <div>
            <label>Mortgage Type</label>
            <InputRadios value='Repayment' register={register} name='mortgageType' />
            <InputRadios value='Interest Only' register={register} name='mortgageType' />
         </div>

         <button type='submit'> <img src={Calculator} alt='' /> Calculate Pepayments</button>
    </form>
  )
}

export default Form