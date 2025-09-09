
type RepaymentsDispalyProps ={
  monthPayment?:number,
  totalPayment?: number
}

const RepaymentsDisplay = ({monthPayment = 0,totalPayment  = 0}:RepaymentsDispalyProps) => {
  
  console.log(monthPayment,totalPayment)

  return (
    <div>
        
    </div>
  )
}

export default RepaymentsDisplay