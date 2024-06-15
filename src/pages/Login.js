import React from 'react'
import loginIcons from '../assest/signin.gif'


const Login = () => {
  return (
    <section id='login'>
      <div className='mx-auto container p-4'>

        <div className='bg-slate-100 p-2 w-full max-w-md mx-auto'>
          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcons} alt='Login icons' />
          </div>

          <form className='grid'>
            <div>
              <label>Email :</label>
              <div className='bg-slate-200 p-2'>
                <input type='email' placeholder='Enter your email' className='w-full h-full outline-none bg-transparent'></input>
              </div>
            </div>

            <div>
              <label>Password :</label>
              <div className='bg-slate-200 p-2'>
                <input type='password' placeholder='Enter your password' className='w-full h-full outline-none bg-transparent'></input>
              </div>
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login