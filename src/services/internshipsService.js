import { internships, applications } from './mockData'

const wait = (ms = 200) => new Promise(res => setTimeout(res, ms))

export async function getInternships() { await wait(); return internships.slice() }
export async function postInternship(data) { await wait(); const id = Date.now(); const entry = { id, ...data }; internships.push(entry); return entry }
export async function applyToInternship(internshipId, studentId) { await wait(); const id = Date.now(); const app = { id, internshipId, studentId, status: 'applied', appliedAt: new Date().toISOString() }; applications.push(app); return app }
export async function getApplicationsForStudent(studentId) { await wait(); return applications.filter(a => a.studentId === studentId) }
export async function getApplicationsForInternship(internshipId) { await wait(); return applications.filter(a => a.internshipId === internshipId) }
