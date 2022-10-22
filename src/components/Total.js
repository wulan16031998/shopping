import React, { useState } from "react";

export function Total() {
  const [temporaryAmount,setTemporaryAmount]=useState(0);
  const [total,setTotal]=useState(0);


  return (
    <div className="w-[30%] h-48 bg-slate-500/5 shadow-md p-4 flex-col justify-start items-start  m-4 leading-5 text-xs">

        <h3 className="flex">The total amount of</h3>
        <div className="flex  ">
          <p className="flex-col text-left w-1/2 ">Temporary amount </p>
          <p className="flex-col w-1/2 text-right">$98</p>
        </div>
        <div className="flex">
          <p className="flex-col text-left w-1/2 ">Shipping</p>
          <p className="flex-col w-1/2 text-right">Gratis</p>
        </div>
        <div className="flex">
          <p className="flex-col text-left w-1/2 ">The Total Amount of<br/> (including VAT)</p>
          <p className="flex-col w-1/2 text-right">$98</p>
        </div>
        <div className="flex justify-center items-end" >
          <button ><span className="bg-slate-500 p-2  inline-block shadow-lg rounded-lg">Go To Checkout</span></button>
        </div>
       

     
      
    

    
    </div>
  )
}