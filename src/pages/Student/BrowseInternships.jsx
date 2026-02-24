import React, { useEffect, useState } from 'react'
import { getInternships, applyToInternship } from '../../services/internshipsService'
import InternshipCard from '../../components/InternshipCard/InternshipCard'
import { useAuth } from '../../context/AuthContext'

export default function BrowseInternships() {
  const [list, setList] = useState([])
  const { user } = useAuth()

  useEffect(() => { getInternships().then(setList) }, [])

  const apply = async (internship) => {
    if (!user) return alert('Login first')
    await applyToInternship(internship.id, user.id)
    alert('Applied!')
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Browse Internships</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {list.map(i => <InternshipCard key={i.id} internship={i} onApply={apply} />)}
      </div>
    </div>
  )
}
