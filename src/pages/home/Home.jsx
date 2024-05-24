import React, { memo } from 'react'
import { useFetch } from '../../hooks/useFetch'

import Product from '../../components/products/Products'
import Hero from '../../components/hero/Hero'

const Home = () => {
  const {data, loading} = useFetch('/products') 
  return (
    <div className="container">

    <div className='home-page'>
        <Hero/>
        <Product data={data?.data?.products} loading={loading}/>
    </div>
    </div>
  )
}

export default memo(Home)