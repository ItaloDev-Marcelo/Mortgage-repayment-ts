

const UseCalRepament = () => {
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

    return {calRepayment}
}

export default UseCalRepament