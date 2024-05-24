import React from 'react'
import CartContent from '../../components/card/Carddd'
import useStore from '../../context/store'

const Cart = () => {
  let cart = useStore(state => state.cartList)

  return (
    <div>
        <CartContent />
    </div>
  )
}

export default Cart