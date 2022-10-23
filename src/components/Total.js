import React, { useContext, useEffect, useState } from "react";

export function Total(props) {
  const [temporaryAmount,setTemporaryAmount]=useState([]);
  const [total,setTotal]=useState(0);
  
  const price = props.price;

  const handleChangeTemporary= () => {
    setTemporaryAmount((prevAmount)=> [price, ...prevAmount] )
    
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
    <div className="flex-col w-[30%] max-sm:w-1/2  m-4 text-xs max-sm:h-56">
      <div className=" h-48 shadow-md p-4 justify-start items-start leading-5 bg-slate-500/5 ">

        <h3 className="flex">The total amount of</h3>

        <div className="flex  ">
          <p className="flex-col text-left w-1/2 ">Temporary amount </p>
          
          <p className="flex-col w-1/2 text-right">${temporaryAmount}</p>
        </div>

        <div className="flex">
          <p className="flex-col text-left w-1/2 ">Shipping</p>
          <p className="flex-col w-1/2 text-right">Gratis</p>
        </div>

        <div className="flex">
          <p className="flex-col text-left w-1/2 ">The Total Amount of<br/> (including VAT)</p>
          <p className="flex-col w-1/2 text-right">${}</p>
        </div>

        <div className="flex justify-center items-end" >
          <button ><span className="bg-slate-500 p-2  inline-block shadow-lg rounded-lg max-sm:text-[9px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Go To Checkout</span></button>
        </div>
      </div>

      <div className="flex-col mt-7 h-8  bg-slate-500/5 text-gray-500 p-2">
        <label>Add Code Discount[optional]</label>
        <select> 
          <option></option>
        </select>
      </div>

    
       

     
      
    

    
    </div>
  )
}