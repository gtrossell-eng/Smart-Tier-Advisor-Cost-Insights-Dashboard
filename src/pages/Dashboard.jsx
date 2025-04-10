import React, { useEffect, useState } from 'react'
import Heatmap from '../components/Heatmap'
import { loadBlobData } from '../utils/dataLoader'

const Dashboard = () => {
  const [blobs, setBlobs] = useState([])

  useEffect(() => {
    loadBlobData().then(setBlobs)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Access Heatmap</h2>
      <p className="mb-2 text-sm text-gray-600">Visualize blob-level access patterns and current storage tiers.</p>
      <Heatmap blobs={blobs} />
    </div>
  )
}

export default Dashboard