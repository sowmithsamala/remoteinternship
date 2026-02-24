import React, { useEffect, useState } from 'react'
import { getApplicationsForInternship } from '../../services/internshipsService'
import { internships } from '../../services/mockData'

export default function ViewApplications() {
  const [selected, setSelected] = useState(internships[0]?.id || null)
  const [apps, setApps] = useState([])

  useEffect(() => {
    if (selected) getApplicationsForInternship(selected).then(setApps)
  }, [selected])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">View Applications</h2>
      <div className="mb-2">
        <select value={selected} onChange={e => setSelected(Number(e.target.value))} className="border p-2 rounded">
          {internships.map(i => <option key={i.id} value={i.id}>{i.title}</option>)}
        </select>
      </div>
      <div className="space-y-2">
        {apps.length === 0 && <div className="text-sm text-gray-500">No applicants yet.</div>}
        {apps.map(a => (
          <div key={a.id} className="card flex justify-between">
            <div>Applicant ID: {a.studentId}</div>
            <div className="text-sm text-gray-600">Status: {a.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
