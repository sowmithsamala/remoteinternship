import React, { useEffect, useState } from 'react'
import { getTasksForStudent, updateTaskStatus } from '../../services/tasksService'
import { useAuth } from '../../context/AuthContext'
import TaskCard from '../../components/TaskCard/TaskCard'

export default function MyTasks() {
  const { user } = useAuth()
  const [tasks, setTasks] = useState([])

  useEffect(() => { if (user) getTasksForStudent(user.id).then(setTasks) }, [user])

  const toggle = async (task) => {
    const newStatus = task.status === 'done' ? 'open' : 'done'
    await updateTaskStatus(task.id, newStatus)
    setTasks(prev => prev.map(t => t.id === task.id ? { ...t, status: newStatus } : t))
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">My Tasks</h2>
      <div className="space-y-2">
        {tasks.map(t => <TaskCard key={t.id} task={t} onToggle={toggle} />)}
      </div>
    </div>
  )
}
