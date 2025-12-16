import { useState } from 'react'
import StarRating from '../components/StarRating'

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rating: 0,
    feedback: ''
  })
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const submitData = {
        ...formData,
        rating: parseInt(formData.rating)
      }
      console.log('Submitting data:', submitData)
      const response = await fetch('http://localhost:3000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitData)
      })
      
      if (response.ok) {
        setMessage('Feedback submitted successfully!')
        setIsError(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          rating: 1,
          feedback: ''
        })
      } else {
        setMessage('Failed to submit feedback')
        setIsError(true)
      }
    } catch (error) {
      setMessage('Error submitting feedback')
      setIsError(true)
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Feedback Form</h1>
        <a href="/admin" className="text-sm text-blue-600 hover:text-blue-800 underline">
          Admin Login
        </a>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <StarRating value={formData.rating} onChange={(value) => setFormData({ ...formData, rating: value})}/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Submit Feedback
        </button>
      </form>
      
      {message && (
        <div className={`mt-4 p-3 rounded-md ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}
    </div>
  )
}

export default FeedbackForm