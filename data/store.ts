import { configureStore } from '@reduxjs/toolkit'

import keyboardReducer from './keyboard';

export const store = configureStore({
  reducer: {
    keyboard: keyboardReducer,
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
