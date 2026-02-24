import React from 'react'

export default function FeedbackCard({ feedback }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">Rating: {feedback.rating} / 5</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">{feedback.comments}</div>
        </div>
      </div>
    </div>
  )
}
