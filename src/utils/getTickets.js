// import { useDispatch } from 'react-redux'
// import { collection, getDocs } from 'firebase/firestore'
// import { addTicket } from '../redux/ticket/ticketListSlice'
// import { db } from '../firebase'

// const dispatch = useDispatch()
// const ticketsCollectionRef = collection(db, 'tickets')

// export const getTickets = async () => {
//   const data = await getDocs(ticketsCollectionRef)
//   data.docs.map((doc) => dispatch(addTicket({ ...doc.data(), id: doc.id })))
// }
