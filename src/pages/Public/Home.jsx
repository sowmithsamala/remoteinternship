import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container-max px-4 py-8">
      {/* Hero Section */}
      <div className="card mb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">Remote Internship Management & Evaluation</h1>
            <p className="text-muted mt-3 text-lg">Manage internships, submit reports, and receive mentor feedback — all remotely with a modern UI. Connect with top companies and accelerate your career growth.</p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6 flex gap-3 flex-col md:flex-row">
            <Link to="/register" className="btn-primary">Get Started</Link>
            <Link to="/student/browse" className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 font-medium">Browse Internships</Link>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="card p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-bold text-lg mb-2">Remote Internships</h3>
            <p className="text-sm text-muted">Work from anywhere with flexible remote internship opportunities</p>
          </div>
          <div className="card p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold text-lg mb-2">Mentor Feedback</h3>
            <p className="text-sm text-muted">Get regular feedback and guidance from experienced mentors</p>
          </div>
          <div className="card p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-bold text-lg mb-2">Task Tracking</h3>
            <p className="text-sm text-muted">Manage tasks and monitor progress throughout your internship</p>
          </div>
          <div className="card p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-bold text-lg mb-2">Evaluations</h3>
            <p className="text-sm text-muted">Receive comprehensive evaluations to build your portfolio</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card p-6 text-center">
            <div className="inline-block w-12 h-12 bg-blue-100 rounded-full text-blue-600 font-bold text-lg mb-4 flex items-center justify-center">1</div>
            <h4 className="font-bold mb-2">Register</h4>
            <p className="text-sm text-muted">Create your account and complete your profile</p>
          </div>
          <div className="card p-6 text-center">
            <div className="inline-block w-12 h-12 bg-green-100 rounded-full text-green-600 font-bold text-lg mb-4 flex items-center justify-center">2</div>
            <h4 className="font-bold mb-2">Browse & Apply</h4>
            <p className="text-sm text-muted">Explore available internships matching your interests</p>
          </div>
          <div className="card p-6 text-center">
            <div className="inline-block w-12 h-12 bg-purple-100 rounded-full text-purple-600 font-bold text-lg mb-4 flex items-center justify-center">3</div>
            <h4 className="font-bold mb-2">Work & Learn</h4>
            <p className="text-sm text-muted">Complete assigned tasks with mentor guidance</p>
          </div>
          <div className="card p-6 text-center">
            <div className="inline-block w-12 h-12 bg-orange-100 rounded-full text-orange-600 font-bold text-lg mb-4 flex items-center justify-center">4</div>
            <h4 className="font-bold mb-2">Get Certified</h4>
            <p className="text-sm text-muted">Receive evaluation and add to your portfolio</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-8">
            <h3 className="text-xl font-bold mb-4">For Students</h3>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span>Gain practical experience with 50+ internship opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span>Learn from industry-experienced mentors</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span>Flexible working hours and remote environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span>Build a strong portfolio with real projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <span>Get certified and enhance your employability</span>
              </li>
            </ul>
          </div>
          <div className="card p-8">
            <h3 className="text-xl font-bold mb-4">Diverse Opportunities</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded text-center">
                <div className="font-bold text-blue-600">Frontend</div>
                <div className="text-xs text-muted">React, Vue, Angular</div>
              </div>
              <div className="bg-green-50 p-4 rounded text-center">
                <div className="font-bold text-green-600">Backend</div>
                <div className="text-xs text-muted">Node, Python, Java</div>
              </div>
              <div className="bg-purple-50 p-4 rounded text-center">
                <div className="font-bold text-purple-600">Mobile</div>
                <div className="text-xs text-muted">React Native, Flutter</div>
              </div>
              <div className="bg-orange-50 p-4 rounded text-center">
                <div className="font-bold text-orange-600">Data & AI</div>
                <div className="text-xs text-muted">ML, Python, Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Internships</h2>
          <Link to="/student/browse" className="text-blue-600 hover:underline font-semibold">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 border-l-4 border-blue-500">
            <h4 className="font-bold text-lg mb-2">Frontend Intern</h4>
            <p className="text-sm text-muted mb-4">Build stunning user interfaces with React and Tailwind</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">React</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Tailwind</span>
            </div>
            <Link to="/student/browse" className="text-blue-600 hover:underline text-sm font-semibold">Learn More →</Link>
          </div>
          <div className="card p-6 border-l-4 border-green-500">
            <h4 className="font-bold text-lg mb-2">Backend Intern</h4>
            <p className="text-sm text-muted mb-4">Develop robust APIs and microservices with Node.js</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Node.js</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Express</span>
            </div>
            <Link to="/student/browse" className="text-blue-600 hover:underline text-sm font-semibold">Learn More →</Link>
          </div>
          <div className="card p-6 border-l-4 border-purple-500">
            <h4 className="font-bold text-lg mb-2">Full Stack Intern</h4>
            <p className="text-sm text-muted mb-4">Master both frontend and backend development skills</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">MERN</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">MongoDB</span>
            </div>
            <Link to="/student/browse" className="text-blue-600 hover:underline text-sm font-semibold">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="card bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Internship Journey?</h2>
        <p className="text-lg mb-8 opacity-90">Join hundreds of students gaining real-world experience</p>
        <Link to="/register" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          Start Your Internship Today
        </Link>
      </section>
    </div>
  )
}
