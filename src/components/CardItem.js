import React, { useState } from "react";
import PropTypes from 'prop-types';
import {MdDeleteForever} from 'react-icons/md'
import {GiSelfLove} from 'react-icons/gi'
import { Counter } from "./Counter";

CardItem.propTypes ={
  nameItem:PropTypes.string.isRequired,
  color:PropTypes.string.isRequired,
  size:PropTypes.string.isRequired
}

const labelProduk = [
  {
    name:"Blue Denim Shirt",
    price:"80000"
  }
]


export function CardItem(props) {
  const [removeItem,setRemoveItem] = useState(false)

  const handleClickRemove = () => {
    setRemoveItem(true);
  }

  return (
    !removeItem &&
    <div className='flex bg-slate-500/5 shadow-md mb-5 text-sm '>

      <img src='https://picsum.photos/180/200' className='flex m-4 w-[25%] ' alt=""/>
      
      <div className='leading-7 text-left flex-row  my-4 w-[45%]'>
          
          <div className="flex-row text-xs">
            <h4 className="font-bold mb-2">{props.nameItem}</h4>
            <p className="text-[10px]">Color {props.color}</p>
            <p className="text-[10px] mb-2">Size {props.size}</p>
          </div>
          
          
          <div className='flex text-xs  '>

          <div className="w-1/2 flex ">

          <MdDeleteForever/>{" "}
            <button className="flex" onClick={handleClickRemove}>Remove Item</button>
          </div>
          <div className="w-1/2 flex">
            <GiSelfLove className=""/>{" "}
            <button className="flex"> Move to Wish List</button>    
          </div>
          </div>
    </div>

    <Counter priceItem={30000}/>
    
  </div>
    
  )
}