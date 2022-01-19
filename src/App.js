import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/AdminLogin'
import Landing from './pages/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/admin" element={<AdminPage />} />
        {/* <Route path='/admin/basvuru-listei' element={<AdminDashboard />} */}
        {/* <Route path='/admin/basvuru/no' element={<AdminControl />} */}
      </Routes>
    </Router>
  )
}

export default App
