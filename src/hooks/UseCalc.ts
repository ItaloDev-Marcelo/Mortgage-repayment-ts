import { useEffect, useState } from 'react'
import UseForm from './UseForm';

const UseCalc = () => {
   const {Amount,Term,Rate,MortType} = UseForm();

   const [result, setResult] = useState({
    MonthPaymentResult: '',
    TotalPaymentResult : ''
   })
  
   const calRepayment = (Amount: number,Term: number,Rate: number, MortType: string) =>  {
        const taxaMonth = Rate / 100 / 12;
        const totalOfMonths =  Term * 12;
        if(MortType === 'Repayment') {
             const MonthPayment =
        Amount *
        (taxaMonth  * Math.pow(1 + taxaMonth , totalOfMonths)) /
        (Math.pow(1 + taxaMonth , totalOfMonths) - 1);
  
      const TotalPayment = MonthPayment * totalOfMonths; 
  
            return {MonthPayment,TotalPayment}
          }else {
             const MonthPayment = Amount * taxaMonth
             const TotalPayment = MonthPayment * totalOfMonths;
            return {MonthPayment,TotalPayment}
        }
   }
  
   const resetResults = () => setResult({
    MonthPaymentResult: '',
    TotalPaymentResult : ''
   })
  
   const price = Number(Amount.replace(/(\D)/,''));
   const years = Number(Term);
   const porcent = Number(Rate)
   const {MonthPayment, TotalPayment} = calRepayment(price, years,porcent,MortType)
   const MonthPaymentResult = MonthPayment.toString().slice(0, 7).replace(/(\d{1})(?=(\d{3})+(?!\d))/gi, '$1,');
   const TotalPaymentResult = TotalPayment.toString().slice(0, 9).replace(/(\d{1})(?=(\d{3})+(?!\d))/gi, '$1,');
  
  useEffect(() => {
     setResult({
     MonthPaymentResult,
     TotalPaymentResult
  })
  },[MonthPaymentResult, TotalPaymentResult]);


  return {resetResults,result}
}

export default UseCalc