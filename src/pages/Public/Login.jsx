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
    setError(null)
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }
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
        <input 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          className="border p-2 rounded" 
          placeholder="Enter your email"
        />
        <label className="text-sm">Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          className="border p-2 rounded"
          placeholder="Enter your password"
        />
        <button className="mt-3 bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700">
          Login
        </button>
      </form>
      
      <div className="mt-4 pt-4 border-t text-sm text-gray-600">
        <p className="font-semibold mb-2">Test Credentials:</p>
        <p><strong>Admin:</strong> alice@company.com / password</p>
        <p><strong>Student:</strong> charlie@student.com / password</p>
        <p className="mt-2 text-xs">Or use any email with password 'password' to create an account</p>
      </div>
    </div>
  )
}
