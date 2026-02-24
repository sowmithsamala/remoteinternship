import React, { useEffect, useState } from 'react'
import { getApplicationsForStudent } from '../../services/internshipsService'
import { useAuth } from '../../context/AuthContext'

export default function MyApplications() {
  const { user } = useAuth()
  const [apps, setApps] = useState([])

  useEffect(() => {
    if (!user) return
    getApplicationsForStudent(user.id).then(setApps)
  }, [user])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">My Applications</h2>
      <div className="space-y-2">
        {apps.length === 0 && <div className="text-sm text-gray-500">No applications yet.</div>}
        {apps.map(a => (
          <div key={a.id} className="card flex justify-between">
            <div>Application ID: {a.id}</div>
            <div className="text-sm text-gray-600">Status: {a.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
