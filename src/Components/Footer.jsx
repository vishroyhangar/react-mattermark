import React from 'react';
import '../Sass/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="container-logo col-xs-12 col-md-12 col-lg-4">
            <div>
              <p>
                <a className="brand" href="https://mattermark.com/">
                  <img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/mm-logo-white.png" alt="Mattermark logo links to homepage"/>
                </a>
              </p>
              <p>Mattermark, Inc. <br/> 61 Moraga Way Suite 6<br/> Orinda, CA 94563</p>
            </div>
          </div>

          <div className="container-links col-xs-6 col-sm-3 col-md-3 col-lg-2 mb-10">
            <h5>Solutions</h5>
            <ul className="list-unstyled">
              <li><a href="/discovery/">Prospect Discovery</a></li>
              <li><a href="/enrichment/">Lead Enrichment</a></li>
              <li><a href="/api/">Developer API</a></li>
            </ul>
          </div>

          <div className="container-links col-xs-6 col-sm-3 col-md-3 col-lg-2 mb-10">
            <h5>Integrations</h5>
            <ul className="list-unstyled">
              <li><a href="/salesforce/">Salesforce</a></li>
              <li><a href="/spreadsheets/">MS Excel</a></li>
              <li><a href="/spreadsheets/">Google Sheets</a></li>
              <li><a href="/mobile/">iOS App</a></li>
              <li><a href="/browser/">Chrome Extension</a></li>
            </ul>
          </div>

          <div className="container-links col-xs-6 col-sm-3 col-md-3 col-lg-2 mb-10">
            <h5>Company</h5>
            <ul class="list-unstyled">
              <li><a href="/lists/">Lists</a></li>
              <li><a href="/newsletters/">Newsletters</a></li>
              <li><a href="/webinars/">Webinars</a></li>
              <li style={{paddingTop: '10px'}}>
                <a href="https://twitter.com/mattermark" aria-label="Link to Twitter"><i className="fa fa-lg fa-twitter" aria-hidden="true"></i>&nbsp;&nbsp;</a>
                <a href="https://www.linkedin.com/company/mattermark" aria-label="Link to Linkedin"><i className="fa fa-lg fa-linkedin-square" aria-hidden="true"></i>&nbsp;&nbsp;</a>
                <a href="https://www.facebook.com/mattermark" aria-label="Link to Facebook"><i className="fa fa-lg fa-facebook-square" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>

          <div className="container-links col-xs-6 col-sm-3 col-md-3 col-lg-2 mb-10">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="https://support.mattermark.com">Help Center</a></li>
              <li><a href="https://support.mattermark.com/contact-us">Email Us</a></li>
              <li><a href="/privacy-policy/">Privacy</a></li>
              <li><a href="/terms/">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;