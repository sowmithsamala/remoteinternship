import React, { useState } from 'react'
import { submitReport } from '../../services/reportsService'
import { useAuth } from '../../context/AuthContext'

export default function SubmitReport() {
  const { user } = useAuth()
  const [internshipId, setInternshipId] = useState('')
  const [content, setContent] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (!user) return alert('Login required')
    await submitReport({ internshipId: Number(internshipId), studentId: user.id, content, submittedAt: new Date().toISOString() })
    alert('Report submitted')
    setContent('')
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-3">Submit Progress Report</h2>
      <form onSubmit={submit} className="space-y-2">
        <label className="text-sm">Internship ID</label>
        <input value={internshipId} onChange={e => setInternshipId(e.target.value)} className="border p-2 rounded w-full" />
        <label className="text-sm">Report</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} className="border p-2 rounded w-full" rows={6} />
        <button className="bg-indigo-600 text-white px-3 py-2 rounded">Submit</button>
      </form>
    </div>
  )
}
