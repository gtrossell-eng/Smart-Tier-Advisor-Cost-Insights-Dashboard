import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Simulator from './pages/Simulator'
import Recommendations from './pages/Recommendations'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold">Smart Tier Advisor</h1>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Dashboard</NavLink>
          <NavLink to="/simulator" className={({ isActive }) => isActive ? "underline" : ""}>Cost Simulator</NavLink>
          <NavLink to="/recommendations" className={({ isActive }) => isActive ? "underline" : ""}>Recommendations</NavLink>
        </div>
      </nav>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </main>
    </div>
  )
}

export default App