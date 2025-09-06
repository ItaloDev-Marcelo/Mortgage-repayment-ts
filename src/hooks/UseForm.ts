import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { mortgage } from '../schema/zodSchema'
const UseForm = () => {
   const {register, handleSubmit, formState: {errors}, watch, reset} = useForm({resolver: zodResolver(mortgage)})

   const Amount = watch('mortgageAmount') || '';
   const Term  = watch('mortgageTerm') || '';
   const Rate = watch('mortgageRate') || '';
   const MortType  = watch('mortgageType') || '';

   return {Amount,Term,Rate,MortType, register, handleSubmit, errors, reset}

}

export default UseForm