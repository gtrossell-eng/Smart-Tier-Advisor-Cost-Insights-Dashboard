import React from 'react'
import CostSimulator from '../components/CostSimulator'

const Simulator = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cost Simulator</h2>
      <p className="mb-2 text-sm text-gray-600">Use sliders to simulate costs based on usage patterns and tier allocations.</p>
      <CostSimulator />
    </div>
  )
}

export default Simulator