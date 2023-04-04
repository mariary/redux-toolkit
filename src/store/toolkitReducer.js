import {createAction, createReducer} from "@reduxjs/toolkit";

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD_STRING = 'ADD_STRING'
export const REMOVE_STRING = 'REMOVE_STRING'

const initialState = {
  count: 0,
  list: ['Ground control to major Tom', 'Ground control to major Tom', 'Take your protein pills and put your helmet on']
}

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)
export const addString = createAction(ADD_STRING)
export const removeString = createAction(REMOVE_STRING)

export default createReducer(initialState, {
  [increment]: function (state) {
    state.count = state.count + 1
  },
  [decrement]: function (state) {
    state.count = state.count - 1
  },
  [addString]: function (state,action) {
    state.list.push(action.payload)
  },
  [removeString]: function (state) {
    state.list.pop()
  }
})