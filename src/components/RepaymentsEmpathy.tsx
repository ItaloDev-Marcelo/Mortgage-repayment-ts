import EmpathyIcon from '../assets/illustration-empty.svg'
const RepaymentsEmpathy = () => {
  return (
    <section className='flex flex-col justify-center items-center text-center py-4'>
        <figure >
             <img src={EmpathyIcon} alt='' />
        </figure>
       <h1 className=' text-white font-semibold text-[1.2em] mb-1'>Results shown here</h1>
       <p className='mb-2 px-2 text-white opacity-90 '>Complete the form and click “calculate repayments” to see what 
  your monthly repayments would be.</p>
    </section> 

  
  )
}

export default RepaymentsEmpathy