"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'

type cart = {
  id: string,
  qty: number,
  product: {
    id: string
    title: string
    category: string
    price: number
    sellerId: string
  }
}
export default function page() {
  const cartd = [
    {
      id: "fgg",
      qty: 1,
      product: {
        id: "vdf",
        title: "Tshirt",
        category: "clothes",
        price: 500,
        sellerId: ""
      }
    },
    {
      id: "fgg",
      qty: 1,
      product: {
        id: "vdf",
        title: "Tshirt",
        category: "clothes",
        price: 500,
        sellerId: ""
      }
    },
    {
      id: "fgg",
      qty: 1,
      product: {
        id: "vdf",
        title: "Tshirt",
        category: "clothes",
        price: 500,
        sellerId: ""
      }
    }
  ]

  const [cart, setcart] = useState<cart[]>(cartd)

  function cartOperations(ind: number, type: string) {
    switch (type) {
      case "INCREMENT":
        setcart(cart.map((e, i) => {
          if (ind === i) {
            e.qty += 1
            return e;
          }
          return e;
        }))
        break;
      case "DECREMENT":
        setcart(cart.map((e, i) => {
          if (ind === i&&e.qty>1) {
            e.qty -= 1
            console.log(e.qty)
            return e;
          }
          return e;
        }))
        break;
    }
  }
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">3 Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
          </div>
          {cart.map((e, i) =>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={i}>
              <div className="flex w-2/5">
                <div className="w-20">
                  <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{e.product.title}</span>
                  <span className="text-red-500 text-xs">{e.product.category}</span>
                  <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <button className='p-1' onClick={()=>cartOperations(i,"DECREMENT")}>
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>

                <p className="p-2">{e.qty}</p>
                <button className="p-1" onClick={()=>cartOperations(i,"INCREMENT")}>
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">{e.qty*e.product.price}</span>
              <span className="text-center w-1/5 font-semibol text-sm">{e.qty*e.product.price}</span>
            </div>)}
          <a href="#" className="flex font-semibold text-indidgo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Continue Shopping
          </a>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10 h-fit">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
            <span className="font-semibold text-sm">{cart.reduce((p,i)=>p+=i.qty*i.product.price,0)}</span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>{cart.reduce((p,i)=>p+=i.qty*i.product.price,0)}</span>
            </div>
            <Button className='rounded-none w-full text-xl'>Checkout</Button>
            <Link href={""} ></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
