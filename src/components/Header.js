import React from 'react'
import Logo from './Logo'
import { HiSearchCircle } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { IoIosCart } from "react-icons/io";




const Header = () => {
  return (
    <header className='h-16 shadow-md bg-slate-200'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Logo w={90} h={50} />
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='Search Product' className='w-full outline-none rounded-l-full' />
          <div className='text-lg min-w-[50px] h-8 bg-red-300 flex items-center justify-center rounded-r-full text-white hover:bg-red-600'>
            <HiSearchCircle />
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='text-3xl cursor-pointer'>
            <HiUserCircle />
          </div>

          <div className='text-2xl relative'>
            <span><IoIosCart /></span>
            <div className='bg-red-300 h-5 w-5 rounded-full p-1 flex items-center justify-center absolute -top-3 -right-2 hover:bg-red-600w'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            <button className='bg-red-300 text-white py-1 px-4 rounded-full hover:bg-red-600'>Login</button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header