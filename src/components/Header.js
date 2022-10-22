import React from "react";
import {wishList}  from "./WishList";

export function Header() {
  return(
    <div className='container mx-auto w-full h-16 bg-slate-500 flex justify-center items-center text-white mb-[100px]'>
          <h1>Shopping Cart</h1>
          <wishList />
      </div>
  )
}