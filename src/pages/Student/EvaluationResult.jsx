import React, { useEffect, useState } from 'react'
import { evaluations } from '../../services/mockData'
import { useAuth } from '../../context/AuthContext'

export default function EvaluationResult() {
  const { user } = useAuth()
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (!user) return
    const r = evaluations.find(e => e.studentId === user.id)
    setResult(r)
  }, [user])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Evaluation Result</h2>
      {result ? (
        <div className="card">
          <div className="text-xl font-bold">Grade: {result.grade}</div>
          <div className="text-sm text-gray-600">{result.remarks}</div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">No evaluation yet.</div>
      )}
    </div>
  )
}
