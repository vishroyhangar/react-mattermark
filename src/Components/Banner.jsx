import React from 'react';
import '../Sass/Banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <p>
          We are excited to announce that Mattermark has re-launched as an independent company!
          <span>
            <a href="#">Learn More →</a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Banner;