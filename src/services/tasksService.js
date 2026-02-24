import { tasks } from './mockData'
const wait = (ms = 200) => new Promise(res => setTimeout(res, ms))
export async function getTasksForStudent(studentId) { await wait(); return tasks.filter(t => t.studentId === studentId) }
export async function assignTask(payload) { await wait(); const id = Date.now(); const entry = { id, ...payload }; tasks.push(entry); return entry }
export async function updateTaskStatus(taskId, status) { await wait(); const t = tasks.find(x => x.id === taskId); if (t) t.status = status; return t }
