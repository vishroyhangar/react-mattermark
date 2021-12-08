import React from 'react';
import '../Sass/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <div className="navbar-header w-100 d-flex justify-content-between">
            <a className="navbar-brand logo-dark" href="/">
              <img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/logo-cyan-light-bg.png" alt="nav-logo" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mm-menu" aria-controls="mm-menu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon material-icons">menu</span>
            </button>
          </div>


          <div className="navbar-collapse collapse w-100 justify-content-end" id="mm-menu">
            <ul className="nav navbar-nav navbar-right flex-column flex-lg-row">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Solutions</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">List building</a></li>
                  <li><a className="dropdown-item" href="#">Lead enrichment</a></li>
                  <li><a className="dropdown-item" href="#">Developer tools</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Integrations</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Salesforce</a></li>
                  <li><a className="dropdown-item" href="#">Microsoft excel</a></li>
                  <li><a className="dropdown-item" href="#">Google sheets</a></li>
                  <li><a className="dropdown-item" href="#">Browser extension</a></li>
                  <li><a className="dropdown-item" href="#">Iphone app</a></li>
                </ul>
              </li>

              <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;