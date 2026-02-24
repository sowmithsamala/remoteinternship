import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api'
import { users as mockUsers } from '../services/mockData'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('rim_user')
    return raw ? JSON.parse(raw) : null
  })

  useEffect(() => { localStorage.setItem('rim_user', JSON.stringify(user)) }, [user])

  const login = async (email, password) => {
    // Try backend first, fallback to local mock users when backend not available
    try {
      const res = await api.post('/auth/login', { email, password })
      setUser(res.data)
      return { success: true }
    } catch (err) {
      // fallback to in-memory mock users
      const found = mockUsers.find(u => u.email === email && u.password === password)
      if (found) {
        const payload = { id: found.id, name: found.name, email: found.email, role: found.role }
        setUser(payload)
        return { success: true }
      }
      return { success: false, message: err.response?.data?.message || 'Login failed' }
    }
  }

  const logout = () => { setUser(null); localStorage.removeItem('rim_user') }

  const register = async (payload) => {
    try {
      const res = await api.post('/auth/register', payload)
      setUser(res.data)
      return { success: true }
    } catch (err) {
      // fallback: add to local mock users
      const id = Date.now()
      const entry = { id, name: payload.name, email: payload.email, password: payload.password, role: payload.role }
      mockUsers.push(entry)
      const localUser = { id: entry.id, name: entry.name, email: entry.email, role: entry.role }
      setUser(localUser)
      return { success: true }
    }
  }

  return <AuthContext.Provider value={{ user, login, logout, register }}>{children}</AuthContext.Provider>
}

export function useAuth() { return useContext(AuthContext) }
