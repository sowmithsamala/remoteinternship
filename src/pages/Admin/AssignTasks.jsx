import React, { useState } from 'react'
import { users } from '../../services/mockData'
import { assignTask } from '../../services/tasksService'

export default function AssignTasks() {
  const students = users.filter(u => u.role === 'student')
  const [studentId, setStudentId] = useState(students[0]?.id || '')
  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    await assignTask({ title, studentId: Number(studentId), deadline, status: 'open' })
    alert('Task assigned')
    setTitle(''); setDeadline('')
  }

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-semibold mb-3">Assign Task</h2>
      <form onSubmit={submit} className="space-y-2">
        <select value={studentId} onChange={e => setStudentId(e.target.value)} className="border p-2 rounded w-full">
          {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <input placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 rounded w-full" />
        <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="border p-2 rounded w-full" />
        <button className="bg-indigo-600 text-white px-3 py-2 rounded">Assign</button>
      </form>
    </div>
  )
}
