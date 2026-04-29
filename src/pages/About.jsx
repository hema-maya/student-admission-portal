import { Link } from 'react-router-dom'

function About() {
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
        <div className="about-container">
          <h2>About Greenfield College</h2>
          <p className="tagline">Empowering Minds Since 1985</p>

          <div className="about-section">
            <h3>🏫 Our Institution</h3>
            <p>Greenfield College is a premier institution located in Coimbatore, Tamil Nadu. With over 38 years of academic excellence, we are committed to shaping future leaders through quality education and holistic development.</p>
          </div>

          <div className="about-section">
            <h3>🎯 Our Mission</h3>
            <p>To provide accessible, high-quality education that fosters critical thinking, innovation, and social responsibility in every student.</p>
          </div>

          <div className="about-section">
            <h3>📘 Programs Offered</h3>
            <ul>
              <li>B.Sc Computer Science</li>
              <li>B.E. Computer Science & Engineering</li>
              <li>Bachelor of Commerce (B.Com)</li>
              <li>B.A. English Literature</li>
              <li>Master of Business Administration (MBA)</li>
              <li>Master of Computer Applications (MCA)</li>
            </ul>
          </div>

          <div className="about-section">
            <h3>📞 Contact Us</h3>
            <p>📍 123 College Road, Coimbatore – 641001, Tamil Nadu</p>
            <p>📧 admissions@greenfieldcollege.edu</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>
      </div>

      <footer>© 2025 Greenfield College. All rights reserved.</footer>
    </>
  )
}

export default About