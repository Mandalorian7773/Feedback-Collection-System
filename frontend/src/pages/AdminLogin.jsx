import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({email: '', password: ''})
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const authToken = btoa(`${credentials.email}:${credentials.password}`)
    
    try {
      const response = await fetch('https://feedback-collection-system-3m5x.onrender.com/admin/feedback?page=1&limit=1', {
        headers: {
          'Authorization': `Basic ${authToken}`
        }
      })
      
      if (response.ok) {
        localStorage.setItem('authToken', authToken)
        navigate('/admin/dashboard')
      } else {
        setError('Invalid credentials')
      }
    } catch (error) {
      setError('Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <Link 
            to="/" 
            className="text-sm text-gray-600 hover:text-gray-800 underline"
          >
            ← Back to Feedback Form
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Login
          </button>
        </form>
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminLogin