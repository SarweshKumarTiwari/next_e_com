import Link from 'next/link'
import React from 'react'

export default function Dropdown({className}:{className?:string}) {
  return (
    <div className={`p-2 mt-[-200px] bg-white text-gray-500 border border-gray-300 absolute flex flex-col space-y-2 transition-all delay-75 ${className}`}>
        <Link href="/account"className="border-b border-gray-300 p-2">
            <p>account</p>
        </Link>
        <Link href="/cart"className="border-b border-gray-300 p-2">
            <p>cart</p>
        </Link>
        <div className="border-b border-gray-300 p-2">
            <p>sign out</p>
        </div>
    </div>
  )
}
