import Form from '../components/Form'
import MortageContainer from '../helpers/MortageContainer';
import UseForm from '../hooks/UseForm';
const CalculateRepaymentsLayout = () => {
 const {Amount,Term,Rate,MortType, register, handleSubmit, errors, reset} = UseForm();
 console.log(Amount,Term,Rate,MortType)


 const calRepayment = (Amount: number,Term: number,Rate: number,MortType: "Repayment" | "Interest") =>  {
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

const {MonthPayment, TotalPayment} = calRepayment(300000, 25,5.25,'Repayment')

console.log(MonthPayment.toString().slice(0, 7).replace(/(\d{1})(?=(\d{3})+(?!\d))/gi, '$1,'), TotalPayment.toString().slice(0, 9).replace(/(\d{1})(?=(\d{3})+(?!\d))/gi, '$1,'))


  return (
    <MortageContainer>
        <Form register={register} errors={errors} reset={reset} handleSubmit={handleSubmit} />
    </MortageContainer>
  )
}

export default CalculateRepaymentsLayout