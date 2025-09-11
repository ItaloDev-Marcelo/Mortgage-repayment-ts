import Form from '../components/Form'
import MortageContainer from '../helpers/MortageContainer';
import UseForm from '../hooks/UseForm';
import RepaymentsEmpaythy from '../components/RepaymentsEmpathy';
import RepaymentsResults from '../components/RepaymentsResults'
import UseCalc from '../hooks/UseCalc';

const CalculateRepaymentsLayout = () => {
 const {register, handleSubmit, errors, reset, ShowResults, show} = UseForm();
 const {resetResults,result} = UseCalc()


  return (
    <MortageContainer>
        <Form register={register} errors={errors} reset={reset} handleSubmit={handleSubmit} resetResults={resetResults}
         ShowResults={ShowResults}
 />
        {
          !show ? <RepaymentsEmpaythy/> : <RepaymentsResults MonthPaymentResult={result.MonthPaymentResult} TotalPaymentResult={result.TotalPaymentResult} />
        }
    </MortageContainer>
  )
}

export default CalculateRepaymentsLayout