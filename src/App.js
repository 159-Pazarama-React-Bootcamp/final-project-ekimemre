import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import AdminPage from './pages/AdminLogin'
import LandingPage from './pages/LandingPage'
// import NotFound from './pages/NotFound'
import TicketInfo from './pages/TicketInfo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/basvuru" />} />
        <Route path="/basvuru" element={<LandingPage />} />
        <Route exact path="/basvuru/:basvuruNo" element={<TicketInfo />} />
        <Route exact path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  )
}

export default App
