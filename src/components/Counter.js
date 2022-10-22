import React, { useEffect, useState } from "react";
import propTypes from 'prop-types'


Counter.propTypes = {
  priceItem:propTypes.number.isRequired
}

export function Counter(props) {
  const priceItem= props.priceItem
  const [count,setCount] = useState(0);
  const [price,setPrice]=useState("");
  console.log({price});
  


 useEffect(()=> {
  console.log({count})
  setPrice(()=>priceItem * count);
 },[count]);

 const handleClickPlus = () => {
  setCount((prevCount) =>  prevCount + 1);
};
//  const handleClickMin = () => {
//   setCount((prevCount)=> {
//     if(prevCount > 0) {
//       prevCount-1
//     } else {
//       return;
//     }
//   }}

  return (
    <div className=" flex-row  w-[20%] m-4  ">
        <div className="flex-col  h-[90%]">
          <div className="flex justify-end items-start">
            <button  className="p-3 flex" onClick={((prevCount) => prevCount-1)}>-</button>
            <div className="p-3  border-black">
              {count}
            </div>
            <button   className="p-3 flex  border-black" onClick={handleClickPlus}>+</button>
          </div> 
          <div className="flex justify-end items-start text-[10px]">(Note: {count}piece)</div> 
        
        </div>


    <p className="flex-col text-right ">${price}</p>
   
   
    </div>
   
  )
}


