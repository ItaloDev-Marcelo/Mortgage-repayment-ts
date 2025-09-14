import Input from './Input'
import Calculator from '../assets/icon-calculator.svg'
import InputRadios from './InputRadio';
import type { FormProps } from '../types/Form.type';
import ErrorText from './ErrorTxt';
const Form = ({register,handleSubmit, errors, ShowResults}:FormProps) => {


  const formResult = () => {
       ShowResults(true)
  }

  return (
    <form onSubmit={handleSubmit(formResult)} className='w-[300px] xl:w-[400px] py-4'>
         <div className='flex flex-col xl:flex-row xl:justify-between pr-5.5'>
           <legend className='text-[##133040] mb-3 md:mb-0 font-semibold'>Mortgage Calculator</legend>  
           <button onClick={()=> window.location.reload()} className='border-b-1 border-gray-300 
           text-gray-500 text-left font-semibold w-[70px] mt-0.5 md:mt-0'>Clear All</button>
         </div>
         <Input register={register} error={errors} 
          name='mortgageAmount' title='Mortgage Amount'
          subText='£' direction='l'  />

         <div className='xl:flex xl:gap-1.5'>
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
            <InputRadios value='Repayment' register={register} name='mortgageType' error={errors}  />
            <InputRadios value='Interest Only' register={register} name='mortgageType' error={errors}  />
            <ErrorText error={errors?.mortgageType} />
         </div>

         <button type='submit' className='btn bg-lime-400 w-[250px] rounded-3xl py-[20px] mt-4'> <img src={Calculator} alt='' /> Calculate Pepayments</button>
    </form>
  )
}

export default Form