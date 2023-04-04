import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'main',
  initialState: {
    count: 0,
    list: ['Ground control to major Tom', 'Ground control to major Tom', 'Take your protein pills and put your helmet on']
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1
    },
    decrement(state) {
      state.count = state.count - 1
    },
    addString(state, action) {
      state.list.push(action.payload)
    },
    removeString(state) {
      state.list.pop()
    }
  }
})

export default slice.reducer

export const {increment, decrement, addString, removeString} = slice.actions