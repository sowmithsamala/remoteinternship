import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const auth = useAuth()
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    const res = await auth.login(email, password)
    if (res.success) {
      if (auth.user?.role === 'admin') nav('/admin')
      else nav('/student')
    } else setError(res.message)
  }

  return (
    <div className="max-w-md mx-auto card mt-8">
      <h2 className="text-xl font-semibold mb-3">Login</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={submit} className="flex flex-col gap-2">
        <label className="text-sm">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded" />
        <label className="text-sm">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 rounded" />
        <button className="mt-3 bg-indigo-600 text-white px-3 py-2 rounded">Login</button>
      </form>
    </div>
  )
}
