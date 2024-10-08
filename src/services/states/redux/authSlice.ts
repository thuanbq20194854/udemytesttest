import { ResponseLogin, User } from "@/models/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
export interface AuthState {
    isLoggedIn: boolean;
    currentUser: User | null;
    token: string | null;
}

// Define the initial state using that type
const initialState: AuthState = {
    isLoggedIn: false,
    currentUser: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        finishLogin: (state, action: PayloadAction<ResponseLogin>) => {
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },

        logout: (state) => {
            state.currentUser = null;
            state.token = null;
            state.isLoggedIn = false;
        },
        // increment: state => {
        //   state.value += 1
        // },
        // decrement: state => {
        //   state.value -= 1
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // initCart(state, action: PayloadAction<Cart>) {
        //     state.cart = action.payload;
        // },
        // addCartItem: (state, action: PayloadAction<CartItem>) => {
        //     state.cart?.cartItems.push(action.payload);
        // },
        // deleteCartItem: (state, action: PayloadAction<number>) => {
        //     if (state.cart) {
        //         state.cart = {
        //             ...state.cart,
        //             cartItems: state.cart?.cartItems.filter(
        //                 (cartItem) => cartItem.cartId != action.payload,
        //             ),
        //         };
        //     }
        // },
        // deleteCart: (state) => {
        //     state.cart = null;
        // },
    },
});

export const { finishLogin, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export const selectUser = (state: RootState) => state.auth.currentUser;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const authReducer = authSlice.reducer;
