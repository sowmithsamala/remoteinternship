import React, { useState } from 'react'
import { users } from '../../services/mockData'
import { postFeedback } from '../../services/feedbackService'

export default function ProvideFeedback() {
  const students = users.filter(u => u.role === 'student')
  const [studentId, setStudentId] = useState(students[0]?.id || '')
  const [rating, setRating] = useState(5)
  const [comments, setComments] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    await postFeedback({ studentId: Number(studentId), rating: Number(rating), comments })
    alert('Feedback posted')
    setComments('')
  }

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-semibold mb-3">Provide Feedback</h2>
      <form onSubmit={submit} className="space-y-2">
        <select value={studentId} onChange={e => setStudentId(e.target.value)} className="border p-2 rounded w-full">
          {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <input type="number" min={1} max={5} value={rating} onChange={e => setRating(e.target.value)} className="border p-2 rounded w-full" />
        <textarea placeholder="Comments" value={comments} onChange={e => setComments(e.target.value)} className="border p-2 rounded w-full" />
        <button className="bg-indigo-600 text-white px-3 py-2 rounded">Post Feedback</button>
      </form>
    </div>
  )
}
