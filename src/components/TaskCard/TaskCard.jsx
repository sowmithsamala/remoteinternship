import React from 'react'

export default function TaskCard({ task, onToggle }) {
  return (
    <div className="card flex justify-between items-center">
      <div>
        <div className="font-medium">{task.title}</div>
        <div className="text-xs text-gray-500">Deadline: {task.deadline}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className={`text-sm ${task.status === 'done' ? 'text-green-600' : 'text-yellow-600'}`}>{task.status}</div>
        <button onClick={() => onToggle && onToggle(task)} className="px-2 py-1 bg-gray-100 rounded">Toggle</button>
      </div>
    </div>
  )
}
