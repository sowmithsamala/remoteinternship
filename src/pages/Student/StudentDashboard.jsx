import React, { useEffect, useState } from 'react'
import { getApplicationsForStudent } from '../../services/internshipsService'
import { getTasksForStudent } from '../../services/tasksService'
import { getFeedbacksForStudent } from '../../services/feedbackService'
import { useAuth } from '../../context/AuthContext'

export default function StudentDashboard() {
  const { user } = useAuth()
  const [apps, setApps] = useState([])
  const [tasks, setTasks] = useState([])
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    if (!user) return
    getApplicationsForStudent(user.id).then(setApps)
    getTasksForStudent(user.id).then(setTasks)
    getFeedbacksForStudent(user.id).then(setFeedbacks)
  }, [user])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">Applied: <div className="text-xl font-bold">{apps.length}</div></div>
        <div className="card">Tasks: <div className="text-xl font-bold">{tasks.length}</div></div>
        <div className="card">Feedbacks: <div className="text-xl font-bold">{feedbacks.length}</div></div>
      </div>
    </div>
  )
}
