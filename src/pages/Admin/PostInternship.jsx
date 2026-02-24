import React, { useState } from 'react'
import { postInternship } from '../../services/internshipsService'

export default function PostInternship() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [skills, setSkills] = useState('')
  const [duration, setDuration] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    await postInternship({ title, description: desc, skills: skills.split(',').map(s => s.trim()), duration, deadline: '' })
    alert('Posted')
    setTitle(''); setDesc(''); setSkills(''); setDuration('')
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold mb-3">Post Internship</h2>
      <form onSubmit={submit} className="space-y-2">
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 rounded w-full" />
        <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} className="border p-2 rounded w-full" />
        <input placeholder="Skills (comma)" value={skills} onChange={e => setSkills(e.target.value)} className="border p-2 rounded w-full" />
        <input placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)} className="border p-2 rounded w-full" />
        <button className="bg-indigo-600 text-white px-3 py-2 rounded">Post</button>
      </form>
    </div>
  )
}
