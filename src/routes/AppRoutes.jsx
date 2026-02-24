import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import StudentLayout from '../layouts/StudentLayout'
import AdminLayout from '../layouts/AdminLayout'
import Home from '../pages/Public/Home'
import Login from '../pages/Public/Login'
import Register from '../pages/Public/Register'
import StudentDashboard from '../pages/Student/StudentDashboard'
import BrowseInternships from '../pages/Student/BrowseInternships'
import MyApplications from '../pages/Student/MyApplications'
import MyTasks from '../pages/Student/MyTasks'
import SubmitReport from '../pages/Student/SubmitReport'
import MentorFeedback from '../pages/Student/MentorFeedback'
import EvaluationResult from '../pages/Student/EvaluationResult'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import PostInternship from '../pages/Admin/PostInternship'
import ViewApplications from '../pages/Admin/ViewApplications'
import AssignTasks from '../pages/Admin/AssignTasks'
import ProgressTracking from '../pages/Admin/ProgressTracking'
import ProvideFeedback from '../pages/Admin/ProvideFeedback'
import FinalEvaluation from '../pages/Admin/FinalEvaluation'
import { useAuth } from '../context/AuthContext'

function RequireAuth({ children, role }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (role && user.role !== role) return <div className="p-4">Not authorized</div>
  return children ? children : <Outlet />
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<RequireAuth role="student"><StudentLayout /></RequireAuth>}>
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/browse" element={<BrowseInternships />} />
        <Route path="/student/applications" element={<MyApplications />} />
        <Route path="/student/tasks" element={<MyTasks />} />
        <Route path="/student/submit-report" element={<SubmitReport />} />
        <Route path="/student/feedback" element={<MentorFeedback />} />
        <Route path="/student/evaluation" element={<EvaluationResult />} />
      </Route>

      <Route element={<RequireAuth role="admin"><AdminLayout /></RequireAuth>}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/post" element={<PostInternship />} />
        <Route path="/admin/applications" element={<ViewApplications />} />
        <Route path="/admin/assign" element={<AssignTasks />} />
        <Route path="/admin/progress" element={<ProgressTracking />} />
        <Route path="/admin/feedback" element={<ProvideFeedback />} />
        <Route path="/admin/final" element={<FinalEvaluation />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
