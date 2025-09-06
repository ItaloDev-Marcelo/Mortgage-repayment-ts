// import React from 'react'
import UseForm from '../hooks/UseForm'
import type { MortgageForm } from '../schema/zodSchema';
import Input from './Input'
import Calculator from '../assets/icon-calculator.svg'
import InputRadios from './InputRadio';
// ' 'mortgageType' 
const Form = () => {
  const {Amount,Term,Rate,MortType, register, handleSubmit, errors, reset} = UseForm();
  const resetForm = () => reset()

  const formResult = (data: MortgageForm) => {
       console.log(data)
  }

  console.log(Amount,Term,Rate,MortType)

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