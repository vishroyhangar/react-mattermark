import React from 'react';
import '../../Sass/SectionIntro.scss';

const SectionIntro = () => {
  return (
    <section className="sect-intro">
      <div className="container">
        <div className="col-xs-12 hero-content animated fadeIn">
          <h1>Data-Driven Deal Making</h1>
          <h2>Discover, prospect, and track the world’s fastest-growing companies and investors.</h2>
          <div className="signup-area">
            <a type="button" className="btn btn-lg btn-primary" href="/app/signup/">Start Free 14-Day Trial</a>
            <p className="signup-footnote">No commitment, no credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionIntro;