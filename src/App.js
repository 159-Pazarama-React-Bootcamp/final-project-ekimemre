import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import AdminTicketInfo from './pages/AdminTicketInfo'
import AdminDashboard from './pages/AdminDashboard'
import AdminPage from './pages/AdminLogin'
import LandingPage from './pages/LandingPage'
import TicketInfo from './pages/TicketInfo'
import { useDispatch } from 'react-redux'
import { getTickets } from './redux/ticket/ticketListSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTickets())
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/basvuru" />} />
        <Route path="/basvuru" element={<LandingPage />} />
        <Route exact path="/basvuru/:basvuruNo" element={<TicketInfo />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/admin/basvurular" element={<AdminDashboard />} />
        <Route
          exact
          path="/admin/basvurular/:basvuruNo"
          element={<AdminTicketInfo />}
        />
      </Routes>
    </Router>
  )
}

export default App

// <Routes>
// <Route path="/*" element={<Navigate replace to="/basvuru" />} />
// <Route path="/basvuru" element={<LandingPage />} />
// <Route exact path="/basvuru/:basvuruNo" element={<TicketInfo />} />
// <Route exact path="/admin" element={<AdminPage />} />
// <Route exact path="/admin/basvurular" element={<AdminDashboard />} />
// </Routes>

{
  /* <Route
exact
path="/admin/basvurular/:basvuruNo"
element={<AdminTicketInfo />}
/> */
}
