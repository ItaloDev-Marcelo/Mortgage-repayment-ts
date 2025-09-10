type RepaymentsProps = {MonthPaymentResult: string, TotalPaymentResult: string}
const RepaymentsResults = ({MonthPaymentResult, TotalPaymentResult}:RepaymentsProps ) => {
  return (
    <section>
       <h1>Your results</h1>
       <p> Your results are shown below based on the information you provided. 
  To adjust the results, edit the form and click “calculate repayments” again.</p>
       <div>
          <div>
            <p>Your monthly repayments</p>
            <h2>£{MonthPaymentResult}</h2>
          </div>
          <div>
             <p>Total you'll repay over the term</p>
             <h2>£{TotalPaymentResult}</h2>
          </div>
       </div>
 
    </section>
  )
}

export default RepaymentsResults