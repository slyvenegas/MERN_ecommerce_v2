import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom'
import imageTobase64 from '../helpers/imageTobase64';

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)



  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",

  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }


  const handleUploadPic = async (e) => {
    const file = e.target.files[0]

    const imagePic = await imageTobase64(file)
    // console.log("imagePic", imagePic)

    setData((preve)=>{
      return {
        ...preve,
        profilePic : imagePic
      }
    })
  }




  const handleSubmit = (e) => {
    e.preventDefault()
  }

  console.log("data login", data)

  return (
    <section id='signup'>
      <div className='mx-auto container p-4'>

        <div className='bg-slate-100 p-5 w-full max-w-sm mx-auto'>
          <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
              <img src={data.profilePic || loginIcons} alt='Login icons' />
            </div>

            <form>
              <label>
                <div className='text-xs bg-opacity-80 pb-4 mt-2 cursor-pointer bg-slate-200 py-3 text-center absolute bottom-0 w-full'>
                  Upload Photo
                </div>
                <input type='file' className='hidden' onChange={handleUploadPic} />
              </label>
            </form>
          </div>

          <form className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit}>
            <div className='grid'>
              <label>Name :</label>
              <div className='bg-slate-200 p-2'>
                <input
                  type='text'
                  placeholder='Enter your name'
                  name='name'
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent'></input>
              </div>
            </div>

            <div className='grid'>
              <label>Email :</label>
              <div className='bg-slate-200 p-2'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent'></input>
              </div>
            </div>

            <div>
              <label>Password :</label>
              <div className='bg-slate-200 p-2 flex'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Enter your password'
                  name='password'
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent'></input>
                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                  <span>
                    {
                      showConfirmPassword ? (

                        <FaEyeSlash />
                      )
                        :
                        (
                          <FaEye />
                        )
                    }

                  </span>
                </div>
              </div>
            </div>

            <div>
              <label>Confirm Password :</label>
              <div className='bg-slate-200 p-2 flex'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder='Please confirm password'
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent'></input>
                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((preve) => !preve)}>
                  <span>
                    {
                      showConfirmPassword ? (

                        <FaEyeSlash />
                      )
                        :
                        (
                          <FaEye />
                        )
                    }

                  </span>
                </div>
              </div>
            </div>


            <button className='bg-red-300 rounded-full text-white px-6 py-2 w-full max-w-[150px] hover:scale-105 hover:bg-red-600 transition-all mx-auto block mt-6'>Sign up</button>
          </form>

          <p className='mt-5'>Already have account? <Link to={"/login"} className='text-red-300 hover:text-red-600 hover:underline'> Login </Link></p>

        </div>
      </div>
    </section>
  )
}

export default SignUp