import React from 'react'

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Admin Overview</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="card">Internships posted: <div className="text-xl font-bold">4</div></div>
        <div className="card">Total applicants: <div className="text-xl font-bold">5</div></div>
        <div className="card">Tasks assigned: <div className="text-xl font-bold">3</div></div>
      </div>
    </div>
  )
}
