"use client"
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginPage = () => {
    const { data, status } = useSession();
    const router = useRouter()

    // console.log(data, "dataaaa")
    // console.log(status, "statuuuuus")

    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "authenticated") {
        router.push("/")
    }

    return (
        <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem) flex justify-center items-center'>
            {/* BOX CONTAINER */}
            <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] w-full lg:w-[60%] 2xl:w-1/2'>
                {/* IMAGE CONTAINER */}
                <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
                    <Image src="/loginBg.png" alt="" fill className='object-cover' />
                </div>
                {/* FORM CONTAINER */}
                <div className='p-10 flex flex-col gap-8 md:w-1/2'>
                    <h1 className='font-bold text-xl text-center xl:text-2xl'>Welcome to <span style={{ color: 'red' }}>PIZZARIANO</span></h1>
                    <p className='text-center'>Log Into Your Account or Create a New One Using Social Media</p>
                    <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md' onClick={() => signIn("google")}>
                        <Image src="/google.png" alt="" width={20} height={20} className='object-contain' />
                        <span>Sign In with Google</span>
                    </button>
                    <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
                        <Image src="/facebook.png" alt="" width={20} height={20} className='object-contain' />
                        <span>Sign In with Facebook</span>
                    </button>
                    <p className='text-sm text-center'>
                        Have a Problem? <Link href="/" className='underline'>Contact Us</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage