import { Cart, CartItem } from '@/models/cart';
import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface CartState {
  cart : Cart | null
  isLoading : boolean
}


// Define the initial state using that type
const initialState: CartState = {
  cart: null,
  isLoading : false
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`


    initCart(state, action: PayloadAction<Cart>) {
      state.cart = action.payload;
    },
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      state.cart?.cartItems.push(action.payload)
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {

      if (state.cart) {
        state.cart = {
          ...state.cart,
          cartItems : state.cart?.cartItems.filter(cartItem => cartItem.cartId != action.payload)
  
        }
      }
    },

    deleteCart: (state) => {
      state.cart = null;
    },



  }
})

export const {initCart, addCartItem, deleteCartItem, deleteCart} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export const selectCart = (state: RootState)  => state.cart

export const  cartReducer = cartSlice.reducer