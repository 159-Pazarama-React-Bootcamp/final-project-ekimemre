import { createSlice } from '@reduxjs/toolkit'

export const searchTicketSlice = createSlice({
  name: 'search',
  initialState: {
    ticketID: 0,
    success: false,
  },
  reducers: {
    setTicketID: (state, action) => {
      state.ticketID = action.payload
    },
    setSuccess: (state, action) => {
      state.success = action.payload
    },
  },
})

export const { setTicketID, setSuccess } = searchTicketSlice.actions
export default searchTicketSlice.reducer
