function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        JANVI<span>.</span>
      </div>


      {/* Navigation Links */}
      <div className="nav-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a
          href="https://github.com/janvipatel49"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects
        </a>

        <a href="#contact">Contact</a>

      </div>


      {/* Let's Talk Button */}
      <a href="#contact" className="nav-btn">
        Let's Talk
      </a>

    </nav>
  );
}

export default Navbar;