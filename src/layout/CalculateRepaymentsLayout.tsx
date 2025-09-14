import Form from '../components/Form'
import MortageContainer from '../helpers/MortageContainer';
import UseForm from '../hooks/UseForm';
import RepaymentsEmpaythy from '../components/RepaymentsEmpathy';
import RepaymentsResults from '../components/RepaymentsResults'
import RepaymentsDisplay from '../helpers/RepaymentsDisplay';
import { useEffect, useState } from 'react';

const CalculateRepaymentsLayout = () => {
 const {Amount,Term,Rate,MortType,register, handleSubmit, errors,  ShowResults, show} = UseForm();

 
    const [result, setResult] = useState({
     MonthPaymentResult: '',
     TotalPaymentResult : ''
    })



    console.log(show)
   
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
 
 

  return (
    <MortageContainer>
        <Form register={register}  errors={errors}  handleSubmit={handleSubmit}  ShowResults={ShowResults}/>
      <RepaymentsDisplay>
        {
          !show ? <RepaymentsEmpaythy/> : <RepaymentsResults MonthPaymentResult={result.MonthPaymentResult} TotalPaymentResult={result.TotalPaymentResult} />
        }
      </RepaymentsDisplay>
    </MortageContainer>
  )
}

export default CalculateRepaymentsLayout