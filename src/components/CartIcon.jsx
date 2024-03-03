import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <Link href="/cart" className='flex items-center justify-center gap-2'>
            <span>Cart (3)</span>
            <div className='relative w-8 h-8 md:w-5 md:h-5'>
                <Image src="/cart.png" alt="" fill sizes='w-8 h-8 md:w-5 md:h-5' />
            </div>
        </Link>
    )
}

export default CartIcon