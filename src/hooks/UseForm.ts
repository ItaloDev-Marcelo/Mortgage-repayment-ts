import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { mortgage, type MortgageForm } from '../schema/zodSchema'
import { useState } from 'react'
const UseForm = () => {
   const {register, handleSubmit, formState: {errors}, watch, reset, clearErrors} = useForm<MortgageForm>({
      resolver: zodResolver(mortgage),
    defaultValues: {
    mortgageAmount: "",
    mortgageTerm: "",
    mortgageRate: "",
    mortgageType: "",
  },
   })

     const clearForm = () => {
       setShow(false)
    reset(undefined, { keepErrors: false, keepDirty: false, keepTouched: false })
  }

   const Amount = watch('mortgageAmount') || '';
   const Term  = watch('mortgageTerm') || '';
   const Rate = watch('mortgageRate') || '';
   const MortType  = watch('mortgageType') || '';

   const [show, setShow] = useState(false)

  const ShowResults = (valor:boolean) => {
   setShow(valor)
  }

   return {Amount,Term,Rate,MortType, register, handleSubmit, errors, clearForm, ShowResults, show, clearErrors}

}

export default UseForm