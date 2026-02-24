import React from 'react'
import { reports } from '../../services/mockData'

export default function ProgressTracking() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Progress Tracking</h2>
      <div className="space-y-2">
        {reports.map(r => (
          <div key={r.id} className="card">
            <div className="text-sm text-gray-600">Student: {r.studentId} | Internship: {r.internshipId}</div>
            <div className="mt-1">{r.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
