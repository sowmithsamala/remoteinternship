import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container-max px-4 py-8">
      <div className="card mb-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Remote Internship Management & Evaluation</h1>
            <p className="text-muted mt-3 text-lg">Manage internships, submit reports, and receive mentor feedback — all remotely with a modern UI.</p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6 flex gap-3">
            <Link to="/register" className="btn-primary">Get Started</Link>
            <Link to="/student/browse" className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Browse Internships</Link>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="card text-center py-6">Remote work friendly internships</div>
          <div className="card text-center py-6">Mentor feedback & evaluations</div>
          <div className="card text-center py-6">Task tracking & progress reports</div>
        </div>
      </section>
    </div>
  )
}
