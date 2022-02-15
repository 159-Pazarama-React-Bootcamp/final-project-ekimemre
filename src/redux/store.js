import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './ticket/ticketListSlice'
import searchTicketReducer from './ticket/searchTicketSlice'

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    search: searchTicketReducer,
  },
})
