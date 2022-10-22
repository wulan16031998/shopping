import React from "react";
import { CardItem } from "./CardItem";
import { Header } from "./Header";
import { Total } from "./Total";



export function ShoppingPage() {
  return (
    <>
    
    <Header/>
    <div className="container flex mx-auto max-sm:flex-col">
      <div className="flex-row w-[70%] ml-2 max-sm:w-[90%] max-sm:ml-3 max-sm:justify-center  ">
        <CardItem nameItem="Blue Denim Shirt" color="Blue" size="M" />
        <CardItem nameItem="Red Hoodie" color="Red" size="M" />

      </div>

      <Total/>  
    </div>
    

   
    
  
    </>
   
  )
  
}