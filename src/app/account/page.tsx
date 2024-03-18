import React from 'react'
import Checkout from './Checkout'

export default function page() {
    
    return (
        <div>
            <p className="text-2xl mx-4 font-bold text-gray-800 text-center py-4 border-b border-gray-300 "> your profile and checkout</p>
            <div className="flex justify-center">
                <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                    <p className="mt-6 text-lg font-medium">Sharavana</p>
                    <form className="mt-5 grid gap-6">
                        
                    </form>
                </div>
                <Checkout/>
            </div>
        </div>
    )
}
