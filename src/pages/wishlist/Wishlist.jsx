import React from 'react'
import useStore from '../../context/store'
import Product from '../../components/products/Products'

const Wishlist = () => {
  let wishlist = useStore(state => state.wish)

  return (
    <div>
        <div className="container">

        <Product data={wishlist}/>
        </div>

    </div>
  )
}

export default Wishlist