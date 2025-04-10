import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const Heatmap = ({ blobs }) => {
  const labels = blobs.map(blob => blob.name)
  const accessCounts = blobs.map(blob => blob.accessFrequency)
  const colors = blobs.map(blob => {
    switch (blob.tier) {
      case 'Hot': return 'rgba(34,197,94,0.6)'
      case 'Cool': return 'rgba(251,191,36,0.6)'
      case 'Archive': return 'rgba(59,130,246,0.6)'
      default: return 'rgba(107,114,128,0.6)'
    }
  })

  const data = {
    labels,
    datasets: [{
      label: 'Access Frequency (last 30 days)',
      data: accessCounts,
      backgroundColor: colors
    }]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.parsed.y} accesses`
        }
      }
    },
    scales: {
      y: { beginAtZero: true, ticks: { precision: 0 } }
    }
  }

  return <Bar data={data} options={options} />
}

export default Heatmap