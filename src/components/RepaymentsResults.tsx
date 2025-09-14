type RepaymentsProps = {MonthPaymentResult: string, TotalPaymentResult: string}
const RepaymentsResults = ({MonthPaymentResult, TotalPaymentResult}:RepaymentsProps ) => {
  return (
    <section className="flex flex-col  py-4 px-5">
       <h1 className='text-white font-semibold mb-2 text-[1.3em] xl:mb-7'>Your results</h1>
       <p className="text-white opacity-90 mb-4 xl:mb-7"> Your results are shown below based on the information you provided. 
  To adjust the results, edit the form and click “calculate repayments” again.</p>
       <div className="bg-[#0e2431]  h-[200px] rounded-[10px] relative xl:mt-5 overflow-hidden">
        <div className="bg-lime-300 w-full h-[5px]  rounded-t-3xl"></div>
          <div className="p-4">
            <div className="my-2">
            <p className="text-white opacity-90">Your monthly repayments</p>
            <h2 className="font-semibold text-4xl tracking-wide text-lime-400">£{MonthPaymentResult}</h2>
          </div>
          <hr className='my-2 opacity-55 border-amber-100'/>
          <div>
             <p  className="text-white opacity-90">Total you'll repay over the term</p>
             <h2 className="text-[1.7em] font-semibold text-white">£{TotalPaymentResult}</h2>
          </div>
          </div>
       </div>
 
    </section>
  )
}

export default RepaymentsResults