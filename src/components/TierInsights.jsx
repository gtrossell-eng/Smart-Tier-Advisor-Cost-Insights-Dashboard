import React from 'react'

const TierInsights = ({ blobs }) => {
  const getRecommendation = (access, tier) => {
    if (access > 20 && tier !== 'Hot') return 'Move to Hot'
    if (access <= 20 && access > 5 && tier !== 'Cool') return 'Move to Cool'
    if (access <= 5 && tier !== 'Archive') return 'Move to Archive'
    return 'Keep as is'
  }

  const handleExport = () => {
    const headers = ['Blob Name', 'Current Tier', 'Accesses', 'Recommended Action']
    const rows = blobs.map(blob => [
      blob.name,
      blob.tier,
      blob.accessFrequency,
      getRecommendation(blob.accessFrequency, blob.tier)
    ])

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers, ...rows].map(row => row.join(',')).join('\n')

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'tier_recommendations.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleExport}
      >
        Export as CSV
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Blob Name</th>
              <th className="px-4 py-2">Current Tier</th>
              <th className="px-4 py-2">Accesses</th>
              <th className="px-4 py-2">Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            {blobs.map((blob, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2">{blob.name}</td>
                <td className="px-4 py-2">{blob.tier}</td>
                <td className="px-4 py-2 text-center">{blob.accessFrequency}</td>
                <td className="px-4 py-2 text-blue-600">
                  {getRecommendation(blob.accessFrequency, blob.tier)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TierInsights