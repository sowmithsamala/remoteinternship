import React from 'react'

export default function InternshipCard({ internship, onApply }) {
  return (
    <div className="card">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{internship.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{internship.description}</p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {internship.skills?.map(s => (
              <span key={s} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">{s}</span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm">{internship.duration}</div>
          <button onClick={() => onApply && onApply(internship)} className="mt-2 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Apply</button>
        </div>
      </div>
    </div>
  )
}
