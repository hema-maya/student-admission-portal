import { Link } from 'react-router-dom'

function Home() {
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
        <div className="home-hero">
          <h1>Welcome to Greenfield College</h1>
          <p>Start your academic journey with us. Apply for admission to our wide range of undergraduate and postgraduate programs.</p>
          <Link to="/register" className="btn-primary">Apply Now</Link>
        </div>

        <div className="home-cards">
          <div className="card">
            <div className="icon">📚</div>
            <h3>50+ Courses</h3>
            <p>Wide range of programs across all streams</p>
          </div>
          <div className="card">
            <div className="icon">🏫</div>
            <h3>Modern Campus</h3>
            <p>State-of-the-art labs and infrastructure</p>
          </div>
          <div className="card">
            <div className="icon">🏆</div>
            <h3>Top Rankings</h3>
            <p>Consistently ranked among top colleges</p>
          </div>
          <div className="card">
            <div className="icon">🤝</div>
            <h3>Placements</h3>
            <p>Strong industry ties and 95% placement rate</p>
          </div>
        </div>
      </div>

      <footer>© 2025 Greenfield College. All rights reserved.</footer>
    </>
  )
}

export default Home