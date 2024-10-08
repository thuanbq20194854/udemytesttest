import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseUtil, Learning } from "@/models/learning";

// Define a type for the slice state
export interface wishlistState {
    wishlist: Learning[] | null;
}

// Define the initial state using that type
const initialState: wishlistState = {
    wishlist: null,
};

export const wishlistSlice = createSlice({
    name: "wishlist",
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

        initWishlist(state, action: PayloadAction<Learning[]>) {
            state.wishlist = action.payload;
        },
        addToWishlist: (state, action: PayloadAction<Learning>) => {
            const addedItem: Learning = {
                ...action.payload,
                type: CourseUtil.WISH_LIST_TYPE,
            };
            state.wishlist?.push(addedItem);
        },

        removeFromWishList: (state, action: PayloadAction<number>) => {
            const deleteId = action.payload;

            state.wishlist?.filter((item) => item.id != deleteId);
        },
    },
});

export const { initWishlist, addToWishlist } = wishlistSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export const selectWishlist = (state: RootState) => state.wishlist;

export const wishlistReducer = wishlistSlice.reducer;
