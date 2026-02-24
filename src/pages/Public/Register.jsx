import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [error, setError] = useState(null)
  const auth = useAuth()
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    
    if (!name || !email || !password) {
      setError('Please fill in all fields')
      return
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    
    const res = await auth.register({ name, email, password, role })
    if (res.success) {
      if (role === 'admin') nav('/admin')
      else nav('/student')
    } else {
      setError(res.message || 'Registration failed')
    }
  }

  return (
    <div className="max-w-md mx-auto card mt-8">
      <h2 className="text-xl font-semibold mb-3">Register</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={submit} className="flex flex-col gap-2">
        <label className="text-sm">Name</label>
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          className="border p-2 rounded"
          placeholder="Full name"
        />
        <label className="text-sm">Email</label>
        <input 
          type="email"
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          className="border p-2 rounded"
          placeholder="Email address"
        />
        <label className="text-sm">Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          className="border p-2 rounded"
          placeholder="At least 6 characters"
        />
        <label className="text-sm">Role</label>
        <select value={role} onChange={e => setRole(e.target.value)} className="border p-2 rounded">
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button className="mt-3 bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700">
          Register
        </button>
      </form>
    </div>
  )
}
