"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import SoldItems from './SoldItems'
import StockItems from './StockItems'
import Shippments from './Shippments'
import Alert from '@/components/ui/alert'

export default function page() {
    const seller={
        id:"",
        user:{
            id:"",
            name:"Anmol Tiwari"
        },
        earning:9
    }
    const [component, setcomponent] = useState<JSX.Element|null>(<SoldItems/>)
  return (
    <div className="md:w-3/4 m-auto p-2">
        <Card className='rounded-none'>
            <CardHeader>
                <div className="flex justify-between">
                <CardTitle className='text-center'>
                    {seller.user.name}
                </CardTitle>
                <div className="flex space-x-2">
                    <Alert
                        trigger={<button className="p-2 text-gray-400 font-medium border border-gray-400">
                        Update
                    </button>}
                    description='hey it worked!'
                    title='wow'
                    onContinue={()=>console.log("done")}
                    />
                    <button className="p-2 text-gray-400 font-medium border border-gray-400 hover:text-red-400 hover:border-red-400">
                        remove
                    </button>
                </div>
                </div>
                <div className="mt-2 flex justify-between text-center">
                    <CardTitle>
                        Total Profit$ -
                    </CardTitle>
                    <div className="text-xl">{seller.earning}</div>
                </div>
            </CardHeader>
            <CardContent className='flex space-x-2 p-2 mx-2 border-t border-gray-200 '>
                <Button className='w-full text-center'onClick={()=>setcomponent(<SoldItems/>)}>Total Sales</Button>
                <Button className='w-full text-center'onClick={()=>setcomponent(<StockItems/>)}>Stocks</Button>
                <Button className='w-full text-center' onClick={()=>setcomponent(<Shippments/>)}>Shipments</Button>
            </CardContent>
           {component}
        </Card>
    </div>
  )
}
