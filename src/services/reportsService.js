import { reports } from './mockData'
const wait = (ms = 200) => new Promise(res => setTimeout(res, ms))
export async function submitReport(payload) { await wait(); const id = Date.now(); const entry = { id, ...payload }; reports.push(entry); return entry }
export async function getReportsForInternship(internshipId) { await wait(); return reports.filter(r => r.internshipId === internshipId) }
