import React, { useEffect, useState } from 'react'
import { loadBlobData } from '../utils/dataLoader'
import TierInsights from '../components/TierInsights'

const Recommendations = () => {
  const [blobs, setBlobs] = useState([])

  useEffect(() => {
    loadBlobData().then(setBlobs)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tier Recommendations</h2>
      <TierInsights blobs={blobs} />
    </div>
  )
}

export default Recommendations