import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { mortgage } from '../schema/zodSchema'
import { useState } from 'react'
const UseForm = () => {
   const {register, handleSubmit, formState: {errors}, watch, reset} = useForm({resolver: zodResolver(mortgage)})

   const Amount = watch('mortgageAmount') || '';
   const Term  = watch('mortgageTerm') || '';
   const Rate = watch('mortgageRate') || '';
   const MortType  = watch('mortgageType') || '';

   const [show, setShow] = useState(false)

  const ShowResults = (valor:boolean) => {
   setShow(valor)
  }

   return {Amount,Term,Rate,MortType, register, handleSubmit, errors, reset, ShowResults, show}

}

export default UseForm