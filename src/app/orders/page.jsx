import React from 'react'

const OrdersPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-red-100'>
                        <td className='py-6 px-1 text-center'>12345889721837</td>
                        <td className='py-6 px-1 text-center'>25 Feb 2024</td>
                        <td className='py-6 px-1 text-center'>Rp. 150.000</td>
                        <td className='py-6 px-1 text-center'>Burger, Pizza, Etc</td>
                        <td className='py-6 px-1 text-center'>On The Way</td>
                    </tr>
                    <tr className='odd:bg-gray-100'>
                        <td className='py-6 px-1 text-center'>12345889721837</td>
                        <td className='py-6 px-1 text-center'>25 Feb 2024</td>
                        <td className='py-6 px-1 text-center'>Rp. 150.000</td>
                        <td className='py-6 px-1 text-center'>Burger, Pizza, Etc</td>
                        <td className='py-6 px-1 text-center'>Delivered</td>
                    </tr>
                    <tr className='odd:bg-gray-100'>
                        <td className='py-6 px-1 text-center'>12345889721837</td>
                        <td className='py-6 px-1 text-center'>25 Feb 2024</td>
                        <td className='py-6 px-1 text-center'>Rp. 150.000</td>
                        <td className='py-6 px-1 text-center'>Burger, Pizza, Etc</td>
                        <td className='py-6 px-1 text-center'>Delivered</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrdersPage