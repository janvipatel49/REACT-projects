import React, { useState } from "react";
import "./App.css";

function App() {
  const [isFollowing, setIsFollowing] = useState(false);

  function handleFollow() {
    setIsFollowing(!isFollowing);
  }

  return (
    <div className="page">

      <div className="profile-card">

        {/* Background Shape */}
        <div className="circle"></div>

        {/* Profile Image */}
        <div className="image-box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybyl9A8igYvbCVHOd-yr0ljw1laE0m_INijPeJDhP3w&s=10"
            alt="profile"
          />
        </div>

        {/* Profile Details */}
        <div className="profile-details">

          <h1>Olivia Smith</h1>
          <p className="username">@oliviasmith</p>

          <p className="bio">
            I'm a Front End Developer. I love creating beautiful
            and modern web experiences.
          </p>

          {/* Stats */}
          <div className="stats">

            <div className="stat">
              <h3>10K</h3>
              <p>Views</p>
            </div>

            <div className="stat">
              <h3>55</h3>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h3>100k</h3>
              <p>Followers</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="buttons">

            <button
              className={isFollowing ? "following" : "follow"}
              onClick={handleFollow}
            >
              {isFollowing ? "✓ Following" : "Follow"}
            </button>

            <button className="view-btn">
              View Profile
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;