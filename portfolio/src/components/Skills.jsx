function Skills() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React"
  ];

  const programmingSkills = [
    "C",
    "C++"
  ];

  const coreSkills = [
    "DSA"
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        {/* Heading */}
        <div className="section-heading">
          <p>MY SKILLS</p>

          <h2>
            What I <span>work with.</span>
          </h2>

          <p className="heading-text">
            Technologies and concepts I have learned while
            building projects and improving my development skills.
          </p>
        </div>


        {/* Skills Cards */}
        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card frontend-card">

            <div className="skill-number">
              01
            </div>

            <div className="skill-icon">
              &lt;/&gt;
            </div>

            <h3>Frontend Development</h3>

            <p>
              Creating responsive and interactive websites
              with modern frontend technologies.
            </p>

            <div className="skill-tags">
              {frontendSkills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>


          {/* Programming */}
          <div className="skill-card programming-card">

            <div className="skill-number">
              02
            </div>

            <div className="skill-icon">
              C++
            </div>

            <h3>Programming</h3>

            <p>
              Building programming logic and solving problems
              using programming languages.
            </p>

            <div className="skill-tags">
              {programmingSkills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>


          {/* Core CS */}
          <div className="skill-card core-card">

            <div className="skill-number">
              03
            </div>

            <div className="skill-icon">
              DSA
            </div>

            <h3>Computer Science</h3>

            <p>
              Learning data structures, algorithms and
              problem-solving concepts.
            </p>

            <div className="skill-tags">
              {coreSkills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>


        {/* Currently Learning */}
        <div className="learning-box">

          <div>
            <span className="learning-label">
              CURRENTLY LEARNING
            </span>

            <h3>
              Always learning. Always building. 🚀
            </h3>
          </div>

          <div className="learning-tags">
            <span>Git & GitHub</span>
            <span>SQL</span>
            <span>APIs</span>
            <span>Firebase</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;