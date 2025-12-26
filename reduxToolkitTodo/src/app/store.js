import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../features/todo/todoSlice'


// har ek application ka ek store hota hai (called single source of store)
export const store = configureStore({
  reducer: todoReducers, // key-value pair
})