import React from 'react';
import '../../Sass/SectionOutro.scss';

const SectionOutro = () => {
  return (
    <section className="sect-outro">
      <div className="container d-lg-flex">
        <div className="container-left col-md-12 col-lg-7 col-xs-12 hero-content animated fadeIn">
          <h3>4 Million Companies<br />20 Million Key Contacts</h3>
          <p className="lead">Start contacting your target list today</p>
          <div className="signup-area">
            <a className="signup-button btn btn-success btn-lg" href="/app/signup/">Start Free 14-Day Trial</a>
            <p className="footnote">No commitment, no credit card required.</p>
          </div>
        </div>

        <div className="container-right col-md-12 col-lg-5 col-xs-12 hero-content animated fadeIn">
          <h4>Right data. Right format. Right now.</h4>

          <ul className="feature-list">
            <li>Developer Tools (REST and GraphQL APIs)</li>
            <li>Web-based Data Browser (CSV and PDF)</li>
            <li>Spreadsheet Plugins (Excel and Sheets)</li>
            <li>Browser Extension (Google Chrome)</li>
            <li>Mobile (iPhone lookup app)</li>
            <li>CRM Integration (Salesforce)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SectionOutro;