import { feedbacks } from './mockData'
const wait = (ms = 200) => new Promise(res => setTimeout(res, ms))
export async function getFeedbacksForStudent(studentId) { await wait(); return feedbacks.filter(f => f.studentId === studentId) }
export async function postFeedback(payload) { await wait(); const id = Date.now(); const entry = { id, ...payload }; feedbacks.push(entry); return entry }
