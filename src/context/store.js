import { create } from 'zustand'
import { wishlist } from './wishlist/WishlistSlice'
import { cart } from './cart/CartSlice'

const useStore = create((set) => ({
    ...wishlist(set),
    ...cart(set)
}))

export default useStore