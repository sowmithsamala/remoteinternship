import React, { useEffect, useState } from 'react'
import { getFeedbacksForStudent } from '../../services/feedbackService'
import { useAuth } from '../../context/AuthContext'
import FeedbackCard from '../../components/FeedbackCard/FeedbackCard'

export default function MentorFeedback() {
  const { user } = useAuth()
  const [list, setList] = useState([])

  useEffect(() => { if (user) getFeedbacksForStudent(user.id).then(setList) }, [user])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Mentor Feedback</h2>
      <div className="space-y-2">
        {list.map(f => <FeedbackCard key={f.id} feedback={f} />)}
        {list.length === 0 && <div className="text-sm text-gray-500">No feedback yet.</div>}
      </div>
    </div>
  )
}
