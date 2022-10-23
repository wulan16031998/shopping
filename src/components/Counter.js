import React, { useEffect, useState } from "react";
import propTypes from 'prop-types'
import { Total } from "./Total";


Counter.propTypes = {
  priceItem:propTypes.number.isRequired
}



export function Counter(props) {
  const priceItem= props.priceItem
  const [count,setCount] = useState(0);
  const [price,setPrice]=useState("");
  const [temporaryAmount, setTemporaryAmount]=useState([]);
  console.log(price);
  
  
 const handleClickPlus = () => {
  setCount((prevCount) =>  prevCount + 1);
};


 const handleChangePrice = () => {
  setPrice(()=>priceItem*count)
 }

 const handleClickMin = () => {
  count > 0 &&
  setCount((prevCount)=> prevCount-1);
 }

 const handleChangeTemporary = () => {
  
  
 }

 useEffect(()=> {
  document.addEventListener('click',handleChangePrice);

 })

  return (
    <>
    
    <div className=" flex-row  w-[20%] m-4  ">
    <div className="flex-col  h-[90%]">
      <div className="flex justify-end items-start">
        <button  className="p-3 flex" onClick={handleClickMin} >-</button>
        <div className="p-3  border-black">
          {count}
        </div>
        <button   className="p-3 flex  border-black" onClick={handleClickPlus} onChange={handleChangeTemporary}>+</button>
      </div> 
      <div className="flex justify-end items-start text-[10px]">(Note: {count}piece)</div> 
    
    </div>


<p className="flex-col text-right ">${price}</p>


</div>

    </>
  )
}


