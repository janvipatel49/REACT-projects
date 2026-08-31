function Hero() {
  return (
    <section className="hero" id="home">

      {/* Left Side */}
      <div className="hero-content">

        <p className="hero-intro">
          HELLO, I'M
        </p>

        <h1>
          Janvi <span>Patel</span>
        </h1>

        <h2>
          B.Sc. Computer Science Student
        </h2>

        <p className="hero-text">
          I am a Computer Science student who loves creating
          modern, responsive and user-friendly websites.
          Currently, I am learning React and building my
          skills through different projects.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="outline-btn">
            Contact Me
          </a>

        </div>

      </div>


      {/* Right Side */}
      <div className="hero-visual">

        <div className="profile-card">

          <div className="profile-circle">
            JP
          </div>

          <h3>Janvi Patel</h3>

          <p>full stack webDeveloper</p>

          <div className="college-box">
            <span>🎓</span>

            <div>
              <small>Currently Studying</small>
              <strong>B.Sc. Computer Science</strong>
              <strong>Semester 3 • KSV</strong>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;