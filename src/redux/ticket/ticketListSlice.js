import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export const getTicketsAsync = createAsyncThunk(
  'tickets/getTicketsAsync',
  async () => {
    const ticketsCollectionRef = collection(db, 'tickets')
    const data = await getDocs(ticketsCollectionRef)
    return data.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
  }
)

//state.tickets.item -> state.tickets.tickets
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
  extraReducers: {
    [getTicketsAsync.fulfilled]: (state, action) => {
      state.item = action.payload
    },
  },
})

export const { addTicket } = ticketListSlice.actions
export default ticketListSlice.reducer

export const getTickets = () => async (dispatch) => {
  try {
    const ticketsCollectionRef = collection(db, 'tickets')
    const data = await getDocs(ticketsCollectionRef)
    data.docs.map((doc) => dispatch(addTicket({ ...doc.data(), id: doc.id })))
  } catch (e) {
    return console.log(e)
  }
}
