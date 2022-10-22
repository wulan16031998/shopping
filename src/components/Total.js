import React, { useContext, useEffect, useState } from "react";

export function Total(props) {
  const [temporaryAmount,setTemporaryAmount]=useState(0);
  const [total,setTotal]=useState(0);
  
  const price = props.price;

  const handleChangeTemporary= () => {
    setTemporaryAmount(()=> price )
    console.log({temporaryAmount});
  }

  // const handleChangeTotal = () => {
  //   setTotal(()=> )
  // }

  useEffect(()=> {
    document.addEventListener('click', handleChangeTemporary);
    // document.body(handleChangeTotal);
  })


  return (
    <div className="w-[30%] max-sm:w-1/2 h-48 bg-slate-500/5 shadow-md p-4 flex-col justify-start items-start  m-4 leading-5 text-xs  max-sm:h-56 ">

        <h3 className="flex">The total amount of</h3>
        <div className="flex  ">
          <p className="flex-col text-left w-1/2 ">Temporary amount </p>
          <p className="flex-col w-1/2 text-right">{price}</p>
        </div>
        <div className="flex">
          <p className="flex-col text-left w-1/2 ">Shipping</p>
          <p className="flex-col w-1/2 text-right">Gratis</p>
        </div>
        <div className="flex">
          <p className="flex-col text-left w-1/2 ">The Total Amount of<br/> (including VAT)</p>
          <p className="flex-col w-1/2 text-right">{}</p>
        </div>
        <div className="flex justify-center items-end" >
          <button ><span className="bg-slate-500 p-2  inline-block shadow-lg rounded-lg max-sm:text-[9px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Go To Checkout</span></button>
        </div>
       

     
      
    

    
    </div>
  )
}