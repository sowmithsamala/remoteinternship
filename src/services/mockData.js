export const users = [
  { id: 1, name: 'Alice Mentor', email: 'alice@company.com', password: 'password', role: 'admin' },
  { id: 2, name: 'Bob Mentor', email: 'bob@company.com', password: 'password', role: 'admin' },
  { id: 3, name: 'Charlie Student', email: 'charlie@student.com', password: 'password', role: 'student' },
  { id: 4, name: 'Dana Student', email: 'dana@student.com', password: 'password', role: 'student' }
]

export let internships = [
  { id: 101, title: 'Frontend Intern', skills: ['React', 'Tailwind'], duration: '3 months', deadline: '2026-03-31', description: 'Work on UI components.' },
  { id: 102, title: 'Backend Intern', skills: ['Node', 'Express'], duration: '4 months', deadline: '2026-04-15', description: 'APIs and microservices.' }
]

export let applications = [
  { id: 1001, internshipId: 101, studentId: 3, status: 'applied', appliedAt: '2026-02-10' }
]

export let tasks = [
  { id: 2001, title: 'Build landing page', internshipId: 101, studentId: 3, deadline: '2026-03-01', status: 'open' }
]

export let reports = [
  { id: 3001, internshipId: 101, studentId: 3, content: 'Week 1 progress: setup component library.', submittedAt: '2026-02-15' }
]

export let feedbacks = [
  { id: 4001, internshipId: 101, studentId: 3, rating: 4, comments: 'Good progress, keep going.' }
]

export let evaluations = [
  { id: 5001, internshipId: 101, studentId: 3, grade: 'B+', remarks: 'Solid work.' }
]
