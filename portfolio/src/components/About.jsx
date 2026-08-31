function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* Left Side */}
        <div className="about-left">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            A little bit <span>about me.</span>
          </h2>

          <p className="about-text">
            Hi, I'm Janvi Patel, a B.Sc. Computer Science student
            at Kadi Sarva Vishwavidyalaya. I am currently studying
            in Semester 3 and building my skills in web development
            and programming.
          </p>

          <p className="about-text">
            I enjoy creating responsive websites and learning
            new technologies. I have worked with HTML, CSS,
            JavaScript, Bootstrap and React, along with C, C++
            and Data Structures & Algorithms.
          </p>

          <a href="#contact" className="about-btn">
            Let's Connect →
          </a>

        </div>


        {/* Right Side */}
        <div className="about-right">

          <div className="about-card">

            <div className="about-icon">
              🎓
            </div>

            <div>
              <small>EDUCATION</small>
              <h3>B.Sc. Computer Science</h3>
              <p>Kadi Sarva Vishwavidyalaya</p>
            </div>

          </div>


          <div className="about-card">

            <div className="about-icon">
              💻
            </div>

            <div>
              <small>FOCUSING ON</small>
              <h3>Web Development</h3>
              <p>React & Modern Web Technologies</p>
            </div>

          </div>


          <div className="about-card">

            <div className="about-icon">
              📚
            </div>

            <div>
              <small>CURRENTLY LEARNING</small>
              <h3>Building My Skills</h3>
              <p>Projects, APIs, Git & GitHub</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;