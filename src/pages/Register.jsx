import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '', email: '', age: '', course: '',
    gender: '', skills: [], address: ''
  })

  const [errors, setErrors] = useState({})

  const skillOptions = ['JavaScript', 'Python', 'Java', 'C++', 'HTML/CSS', 'SQL']

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setForm(prev => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter(s => s !== value)
      }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email'
    if (!form.age) errs.age = 'Age is required'
    else if (form.age < 15 || form.age > 60) errs.age = 'Age must be between 15 and 60'
    if (!form.course) errs.course = 'Please select a course'
    if (!form.gender) errs.gender = 'Please select gender'
    if (form.skills.length === 0) errs.skills = 'Select at least one skill'
    if (!form.address.trim()) errs.address = 'Address is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
    } else {
      navigate('/success')
    }
  }

  return (
    <>
      <nav>
        <span className="logo">🎓 Greenfield College</span>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <div className="page">
        <div className="form-container">
          <h2>Student Registration</h2>
          <p className="subtitle">Fill in the details below to apply for admission</p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Student Name</label>
              <input type="text" name="name" placeholder="Enter full name"
                value={form.name} onChange={handleChange} />
              {errors.name && <span style={{color:'red',fontSize:'0.82rem'}}>{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Enter email"
                value={form.email} onChange={handleChange} />
              {errors.email && <span style={{color:'red',fontSize:'0.82rem'}}>{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Age</label>
              <input type="number" name="age" placeholder="Enter age"
                value={form.age} onChange={handleChange} />
              {errors.age && <span style={{color:'red',fontSize:'0.82rem'}}>{errors.age}</span>}
            </div>

            <div className="form-group">
              <label>Course</label>
              <select name="course" value={form.course} onChange={handleChange}>
                <option value="">-- Select Course --</option>
                <option>B.Sc Computer Science</option>
                <option>B.E. Computer Science</option>
                <option>B.Com</option>
                <option>B.A. English</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
              {errors.course && <span style={{color:'red',fontSize:'0.82rem'}}>{errors.course}</span>}
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                {['Male', 'Female', 'Other'].map(g => (
                  <label key={g}>
                    <input type="radio" name="gender" value={g}
                      checked={form.gender === g} onChange={handleChange} />
                    {g}
                  </label>
                ))}
              </div>
              {errors.gender && <span style={{color:'red',fontSize:'0.82rem'}}>{errors.gender}</span>}
            </div>

            <div className="form-group">
              <label>Skills</label>
              <div className="checkbox-group">
                {skillOptions.map(skill => (
                  <label key={skill}>
                    <input type="checkbox" value={skill}
                      checked={form.skills.includes(skill)} onChange={handleChange} />
                    {skill}
                  </label>
                ))}
              </div>
              {errors.skills && <span style={{color:'red',fontSize:'0.82rem'}}>{errors.skills}</span>}
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea name="address" rows="3" placeholder="Enter your address"
                value={form.address} onChange={handleChange} />
              {errors.address && <span style={{color:'red',fontSize:'0.82rem'}}>{errors.address}</span>}
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>
      </div>

      <footer>© 2025 Greenfield College. All rights reserved.</footer>
    </>
  )
}

export default Register