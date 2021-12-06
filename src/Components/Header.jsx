import React from 'react';
import '../Sass/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand logo-dark" href="/">
              <img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/logo-cyan-light-bg.png" alt="nav-logo" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;