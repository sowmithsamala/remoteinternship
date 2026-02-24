import React, { useState } from 'react'
import { users } from '../../services/mockData'
import { evaluations } from '../../services/mockData'

export default function FinalEvaluation() {
  const students = users.filter(u => u.role === 'student')
  const [studentId, setStudentId] = useState(students[0]?.id || '')
  const [grade, setGrade] = useState('A')
  const [remarks, setRemarks] = useState('')

  const submit = (e) => {
    e.preventDefault()
    evaluations.push({ id: Date.now(), studentId: Number(studentId), grade, remarks })
    alert('Evaluation saved')
    setRemarks('')
  }

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-semibold mb-3">Final Evaluation</h2>
      <form onSubmit={submit} className="space-y-2">
        <select value={studentId} onChange={e => setStudentId(e.target.value)} className="border p-2 rounded w-full">
          {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <input placeholder="Grade" value={grade} onChange={e => setGrade(e.target.value)} className="border p-2 rounded w-full" />
        <textarea placeholder="Remarks" value={remarks} onChange={e => setRemarks(e.target.value)} className="border p-2 rounded w-full" />
        <button className="bg-indigo-600 text-white px-3 py-2 rounded">Save</button>
      </form>
    </div>
  )
}
