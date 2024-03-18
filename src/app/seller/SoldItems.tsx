import Image from 'next/image'
import React from 'react'

export default function SoldItems() {
    return (
        <div className="container p-0 mt-2">
            <div className="flex w-full my-2">
                <div className="w-full bg-white px-4 py-4">
                    <div className="ml-24 flex mt-4 mb-4 justify-between">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Date</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Sold-To</h3>
                    </div>
                    <div className="p-2 x-2 flex border border-gray-200 space-x-4 overflow-y-auto">
                        <Image src="/images.jpeg" alt="" width={50} height={50} />
                        <div className="flex w-full justify-between p-1 ">
                            <div className="flex flex-col justify-between ml-4 flex-grow w-[20%] ">
                                <span className="font-bold text-sm">Tshirt</span>
                                <span className="text-red-500 text-xs">brand</span>
                                <button className="font-semibold w-fit hover:text-red-500 text-gray-500 text-xs">Remove</button>
                            </div>
                            <span className="w-[20%]  text-center font-semibold text-sm">1</span>
                            <span className="w-[20%]  text-center font-semibold text-sm">444</span>
                            <span className="w-[20%]  text-center font-semibold text-sm">12/01/2002</span>
                            <span className="w-[20%]  text-center font-semibold text-sm">Din</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
