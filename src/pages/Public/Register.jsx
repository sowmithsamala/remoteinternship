import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const auth = useAuth()
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    await auth.register({ name, email, password, role })
    if (role === 'admin') nav('/admin')
    else nav('/student')
  }

  return (
    <div className="max-w-md mx-auto card mt-8">
      <h2 className="text-xl font-semibold mb-3">Register</h2>
      <form onSubmit={submit} className="flex flex-col gap-2">
        <label className="text-sm">Name</label>
        <input value={name} onChange={e => setName(e.target.value)} className="border p-2 rounded" />
        <label className="text-sm">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded" />
        <label className="text-sm">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 rounded" />
        <label className="text-sm">Role</label>
        <select value={role} onChange={e => setRole(e.target.value)} className="border p-2 rounded">
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button className="mt-3 bg-indigo-600 text-white px-3 py-2 rounded">Register</button>
      </form>
    </div>
  )
}
