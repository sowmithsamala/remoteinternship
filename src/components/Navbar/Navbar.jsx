import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const nav = useNavigate()

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">RemoteIntern</Link>
        <div className="flex items-center gap-4">
          {!user && (
            <>
              <Link to="/login" className="text-sm text-indigo-600">Login</Link>
              <Link to="/register" className="text-sm">Register</Link>
            </>
          )}
          {user && (
            <div className="flex items-center gap-3">
              <span className="text-sm">{user.name}</span>
              <button className="text-sm text-red-500" onClick={() => { logout(); nav('/') }}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
