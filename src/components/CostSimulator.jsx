import React, { useState } from 'react'
import { calculateCost } from '../utils/costCalculator'

const CostSimulator = () => {
  const [hot, setHot] = useState(100)
  const [cool, setCool] = useState(100)
  const [archive, setArchive] = useState(100)
  const [readsPerMonth, setReads] = useState(1000)

  const cost = calculateCost(hot, cool, archive, readsPerMonth)

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-semibold">Hot GB: {hot}</label>
        <input type="range" min="0" max="1000" value={hot} onChange={e => setHot(+e.target.value)} className="w-full" />
      </div>
      <div>
        <label className="block font-semibold">Cool GB: {cool}</label>
        <input type="range" min="0" max="1000" value={cool} onChange={e => setCool(+e.target.value)} className="w-full" />
      </div>
      <div>
        <label className="block font-semibold">Archive GB: {archive}</label>
        <input type="range" min="0" max="1000" value={archive} onChange={e => setArchive(+e.target.value)} className="w-full" />
      </div>
      <div>
        <label className="block font-semibold">Reads per month: {readsPerMonth}</label>
        <input type="range" min="0" max="10000" value={readsPerMonth} onChange={e => setReads(+e.target.value)} className="w-full" />
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">Estimated Monthly Cost</h3>
        <p className="text-lg text-green-600">${cost.monthly.toFixed(2)} / month</p>
        <p className="text-sm text-gray-600">${cost.yearly.toFixed(2)} / year</p>
      </div>
    </div>
  )
}

export default CostSimulator