import React from 'react'
import Logo from './Logo'
import { HiSearchCircle } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const Header = () => {
  const user = useSelector(state => state?.user)

  console.log("user header", user);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    })

    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
    }

    if (data.error) {
      toast.error(data.message)
    }
  }

  return (
    <header className='h-16 shadow-md bg-slate-200'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className='cursor-pointer'>
          <Link to={"/"}>
            <Logo w={100} h={60} />
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='Search Product' className='w-full outline-none rounded-l-full' />
          <div className='text-lg min-w-[50px] h-6 bg-red-300 flex items-center justify-center rounded-r-full text-white hover:bg-red-600'>
            <HiSearchCircle />
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='text-3xl cursor-pointer'>
            {
              user?.profilePic ? (
                <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />

              ) : (
                <HiUserCircle />
              )
            }
          </div>

          <div className='text-2xl relative cursor-pointer'>
            <span><IoIosCart /></span>
            <div className='bg-red-300 h-5 w-5 rounded-full p-1 flex items-center justify-center absolute -top-3 -right-2 hover:bg-red-600'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            {
              user?._id ? (
                <button>Logout</button>
              )
              : (
            <Link to={"/login"} className='bg-red-300 text-white py-1 px-4 rounded-full hover:bg-red-600'>Login</Link>
             )
            }

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header