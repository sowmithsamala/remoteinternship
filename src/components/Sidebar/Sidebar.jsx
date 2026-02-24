import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Sidebar() {
  const { user } = useAuth()
  if (!user) return null

  const studentLinks = [
    { to: '/student', label: 'Overview' },
    { to: '/student/browse', label: 'Browse Internships' },
    { to: '/student/applications', label: 'My Applications' },
    { to: '/student/tasks', label: 'My Tasks' },
    { to: '/student/submit-report', label: 'Submit Report' },
    { to: '/student/feedback', label: 'Mentor Feedback' },
    { to: '/student/evaluation', label: 'Evaluation' }
  ]

  const adminLinks = [
    { to: '/admin', label: 'Overview' },
    { to: '/admin/post', label: 'Post Internship' },
    { to: '/admin/applications', label: 'View Applications' },
    { to: '/admin/assign', label: 'Assign Tasks' },
    { to: '/admin/progress', label: 'Progress Tracking' },
    { to: '/admin/feedback', label: 'Provide Feedback' },
    { to: '/admin/final', label: 'Final Evaluation' }
  ]

  const links = user.role === 'admin' ? adminLinks : studentLinks

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r p-4 h-full hidden md:block">
      <div className="text-sm font-semibold mb-4">{user.role === 'admin' ? 'Admin' : 'Student'} Panel</div>
      <nav className="flex flex-col gap-2">
        {links.map(l => (
          <Link key={l.to} to={l.to} className="text-sm p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">{l.label}</Link>
        ))}
      </nav>
    </aside>
  )
}
