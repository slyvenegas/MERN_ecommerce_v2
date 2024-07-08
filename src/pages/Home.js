import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'

const Home = () => {
  return (
    <div  className='min-h-[calc(100vh-120px)]'>
      <CategoryList/>
      <BannerProduct/>
    </div>
  )
}

export default Home