import React from "react";
import { CardItem } from "./CardItem";
import { Header } from "./Header";
import { Total } from "./Total";

export function ShoppingPage() {
  return (
    <>
    
    <Header/>
    <div className="container flex mx-auto">
      <div className="flex-row w-[70%] ml-2">
        <CardItem nameItem="Blue Denim Shirt" color="Blue" size="M" />
        <CardItem nameItem="Red Hoodie" color="Red" size="M" />
      </div>

      <Total/>  
    </div>
    

   
    
  
    </>
   
  )
  
}