import { createSlice } from '@reduxjs/toolkit'

export const ticketListSlice = createSlice({
  name: 'tickets',
  initialState: {
    item: [],
  },
  reducers: {
    addTicket: (state, action) => {
      state.item.push(action.payload)
    },
  },
})

export const { addTicket } = ticketListSlice.actions
export default ticketListSlice.reducer
