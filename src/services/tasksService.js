import { tasks, applications } from './mockData'

const wait = (ms = 200) => new Promise(res => setTimeout(res, ms))

export async function getTasksForStudent(studentId) { 
  await wait()
  // Only show tasks for internships where the application is accepted
  const acceptedApps = applications.filter(a => a.studentId === studentId && a.status === 'accepted')
  const acceptedInternshipIds = acceptedApps.map(a => a.internshipId)
  return tasks.filter(t => t.studentId === studentId && acceptedInternshipIds.includes(t.internshipId))
}
export async function assignTask(payload) { await wait(); const id = Date.now(); const entry = { id, ...payload }; tasks.push(entry); return entry }
export async function updateTaskStatus(taskId, status) { await wait(); const t = tasks.find(x => x.id === taskId); if (t) t.status = status; return t }
