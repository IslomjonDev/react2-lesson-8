import React from 'react'
import useStore from '../../context/store'
import './Card.css'
import { BsTrash3 } from 'react-icons/bs'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const CartContent = () => {
    let cart = useStore(state => state.cartList)
    let removeFromCart = useStore(state => state.removeItemFromCart)
    let incQuantity = useStore(state => state.incQuantity)
    let decQuantity = useStore(state => state.decQuantity)
    let clearCart = useStore(state => state.clearCart)

    let cartItem = cart?.map(el => (
        <div key={el.id} className="cart__list-item">
            <div className="cart__list-item__img">
                <img src={el.images[0]} alt="product img" />
            </div>
            <div className="cart__list-item__title">
                <h3 title={el.title}>{el.title}</h3>
                <p title={el.description}>{el.description}</p>
            </div>
            <div className="cart__list-item__quantity">
                <button disabled={el.quantity <= 1} onClick={() => decQuantity(el)}><FaMinus /></button>
                <span>{el.quantity}</span>
                <button className='plbtn' onClick={() => incQuantity(el)}><FaPlus /></button>
            </div>
            <div className="cart__list-item__prices">
                <del>{(el.price * 1.2).brm()}$</del>
                <h3>{(el.price ).brm()}$</h3>
            </div>
            <button className='plbtn' onClick={() => removeFromCart(el)}><BsTrash3 /></button>
        </div>
    ))

    let checkoutProducts = cart?.map(el => (
        <article key={el.id}><img src={el.images[0]} alt="" /></article>
    ))

    let totalPrice = cart?.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <div className='cart-section'>
            <div className="container">
                <div className="cart-wrapper">
                    <section className='cart-section__content'>
                        <div className="cart__title">
                            <h1>Products</h1>
                            <button onClick={() => clearCart()}><BsTrash3 /></button>
                        </div>
                        <div className="cart__list">
                            {cartItem}
                        </div>
                    </section>
                    <aside className='cart-section__aside'>
                        <h2>Place an order</h2>
                        <div className="cart__aside-box">
                            <ul>
                                <li>
                                    <p>{cart.length} items</p>
                                    <p>{(totalPrice).brm()}$</p>
                                </li>
                                <li>
                                    <p>Delivery</p>
                                    <p>16$</p>
                                </li>
                                <button>
                                    Total
                                    <span>{(totalPrice + 16).brm()}$ </span>
                                </button>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default CartContent