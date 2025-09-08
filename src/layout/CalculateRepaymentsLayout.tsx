import Form from '../components/Form'
import UseForm from '../hooks/UseForm';
const CalculateRepaymentsLayout = () => {
 const {Amount,Term,Rate,MortType, register, handleSubmit, errors, reset} = UseForm();
 console.log(Amount,Term,Rate,MortType)
  return (
    <div>
        <Form register={register} errors={errors} reset={reset} handleSubmit={handleSubmit} />
    </div>
  )
}

export default CalculateRepaymentsLayout