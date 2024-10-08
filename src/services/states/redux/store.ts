import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { cartReducer } from "./cartSlice";
import { wishlistReducer } from "./wishlistSlice";
import { authReducer } from "./authSlice";
// ...

export const store = configureStore({
    reducer: {
        // posts: postsReducer,
        // comments: commentsReducer,
        // users: usersReducer
        cart: cartReducer,
        wishlist: wishlistReducer,
        auth: authReducer,
    },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
