import { Link } from 'react-router-dom'

function Success() {
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

      <div className="page success-page">
        <div className="success-box">
          <div className="success-icon">✅</div>
          <h2>Registration Successful!</h2>
          <p>Your application has been submitted. Our team will contact you shortly.</p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>

      <footer>© 2025 Greenfield College. All rights reserved.</footer>
    </>
  )
}

export default Success