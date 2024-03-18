"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Filter() {
    const [filter, setfilter] = useState<string | null>(null);
    const {
        register,
        handleSubmit
    } = useForm()

    function filterDrop(filterType: string) {
        setfilter(prev => {
            if (prev === filterType) {
                return null;
            }
            return filterType;
        })
    }

    function onApply(data:any) {
        console.log(data);
    }

    return (
        <div className="mx-4 mb-2 p-2 flex justify-between border-b border-gray-400 text-gray-600">
            <p >Filter</p>
            <form className="flex space-x-8" onSubmit={handleSubmit(onApply)}>
                <div className='relative z-10'>
                    <button type='button' className="flex space-x-1 items-center justify-center" onClick={() => filterDrop("category")}>
                        <p>Category</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" className='fill-gray-400' viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                    {filter === "category" && <div className="bg-white border border-gray-400 p-2 text-gray-500 absolute top-10">
                        <div className="flex space-x-2 m-1">
                            <input type="checkbox" id="brand" {...register("chjb")} />
                            <label htmlFor='brand'>Men's</label>
                        </div>
                        <div className="flex space-x-2 m-1">
                            <input type="checkbox" id="brand" {...register("chvhj")} />
                            <label htmlFor='brand'>Women's</label>
                        </div>
                        <div className="flex space-x-2 m-1">
                            <input type="checkbox" {...register("cvhg")} id="brand" />
                            <label htmlFor='brand'>Child's</label>
                        </div>
                    </div>}
                </div>
                <div className="relative z-10 ">
                    <button type='button' className="flex space-x-1 items-center justify-center" onClick={() => filterDrop("brand")}>
                        <p>Brand</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" className='fill-gray-400' viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                    {filter === "brand" &&
                        <div className="bg-white border border-gray-400 p-2 text-gray-500 absolute top-10">
                            <div className="flex space-x-2 m-1">
                                <input type="checkbox" {...register("brand")} id="brand" />
                                <label htmlFor='brand'>Levis</label>
                            </div>
                            <div className="flex space-x-2 m-1">
                                <input type="checkbox" {...register("brand")} id="brand" />
                                <label htmlFor='brand'>Raymond</label>
                            </div>
                            <div className="flex space-x-2 m-1">
                                <input type="checkbox" {...register("brand")} id="brand" />
                                <label htmlFor='brand'>SitaRam</label>
                            </div>
                        </div>}
                </div>
                <div className="relative z-10">
                    <button type='button' className="flex space-x-1 items-center justify-center" onClick={() => filterDrop("price")}>
                        <p>Price</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" className='fill-gray-400' viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                    {filter === "price" && <div className="bg-white border border-gray-400 p-2 text-gray-500 absolute top-10">
                        <div className="flex space-x-2 m-1">
                            <input type="checkbox" {...register("price")} id="brand" />
                            <label htmlFor='brand'>10000</label>
                        </div>
                        <div className="flex space-x-2 m-1">
                            <input type="checkbox" {...register("price")} id="brand" />
                            <label htmlFor='brand'>20000</label>
                        </div>
                        <div className="flex space-x-2 m-1">
                            <input type="checkbox" name="brand" id="brand" />
                            <label htmlFor='brand'>30000</label>
                        </div>
                    </div>}
                </div>
                <button className="flex items-center  space-x-1   text-blue-500 group " type="submit">
                    <p className='transition-all delay-75 px-1 border border-blue-400 group-hover:scale-125'>apply</p>
                    <span className="transition-all delay-75 bg-blue-400 text-white rounded-full px-2 py-1 group-hover:scale-50">1</span>
                </button>
            </form>
        </div>
    )
}
