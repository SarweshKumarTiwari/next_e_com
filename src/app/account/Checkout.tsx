import React from 'react'

export default function Checkout() {
    return (
        <div className="mt-10 bg-gray-50 px-4 pt-6 lg:mt-0">
            
            <div className="px-4 ">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
                    ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </a>
                    <span className="font-semibold text-gray-900">Shop</span>
                </li>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
                    <span className="font-semibold text-gray-900">Shipping</span>
                </li>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
                    <span className="font-semibold text-gray-500">Payment</span>
                </li>
            </ul>
                <p className="text-xl font-medium mt-4">Order Summary</p>
                <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="flex w-full flex-col px-4 py-4">
                            <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                            <span className="float-right text-gray-400">42EU - 8.5US</span>
                            <p className="text-lg font-bold">$138.99</p>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="flex w-full flex-col px-4 py-4">
                            <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                            <span className="float-right text-gray-400">42EU - 8.5US</span>
                            <p className="mt-auto text-lg font-bold">$238.99</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 pt-2 border-t border-gray-300 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">$408.00</p>
                </div>
            </div>
            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
        </div>
    )
}
