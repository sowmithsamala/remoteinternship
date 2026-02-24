import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function StudentLayout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4 max-w-6xl mx-auto"><Outlet /></main>
      </div>
    </div>
  )
}
