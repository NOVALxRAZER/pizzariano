import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getData = async (category) => {
    const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed!')
    }
    return res.json()
}

const CategoryPage = async ({ params }) => {
    const slugs = await getData(params.category)

    const formattedPrice = (price) => new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(price);

    return (
        <div className='flex flex-wrap text-red-500'>
            {slugs.map((item) => (
                // TAILWIND GROUP
                <Link className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50' href={`/product/${item.id}`} key={item.id}>
                    {/* IMAGE CONTAINER */}
                    {item.img && (
                        <div className='relative h-[80%]'>
                            <Image src={item.img} alt="" fill className='object-contain' />
                        </div>
                    )}
                    <div className='flex items-center justify-between font-bold'>
                        <h1 className='uppercase text-xl p-2'>{item.title}</h1>
                        <h2 className='group-hover:hidden text-xl'>{formattedPrice(item.price)}</h2>
                        <button className='hidden group-hover:block transition-all duration-300 ease-in-out uppercase bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryPage