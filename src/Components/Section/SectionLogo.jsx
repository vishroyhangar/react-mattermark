import React from 'react';
import '../../Sass/SectionLogo.scss';

const SectionLogo = () => {
  return (
    <section className="sect-logo hidden-xs hidden-sm">
      <div className="container customer-banner">
        <div className="row d-block">
          <a href="http://www.fuelcapital.com/"><img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/custlogos/fuel_trns.png" className="customer-logo-generic" height="50" alt="Fuel Capital"/></a>
          <a href="http://www.hcp.com/"><img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/custlogos/hcptrns.png" className="customer-logo-generic" height="50" alt="Highland Capital"/></a>
          <a href="https://fundersclub.com/"><img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/custlogos/fundersclub_wide.png" className="customer-logo-generic" height="50" alt="FundersClub"/></a>
          <a href="http://ludlowventures.com/"><img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/custlogos/ludlow-new.png" className="customer-logo-generic" height="50" alt="Ludlow Ventures"/></a>
        </div>
        <div className="row d-block">
          <a href="http://www.usv.com/"><img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/custlogos/usv-logo.png" className="customer-logo-generic" height="50" alt="Union Square Ventures"/></a>
          <a href="http://www.tridentcap.com/"><img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/custlogos/trident_trns.png" className="customer-logo-generic" height="50" alt="Trident Ventures"/></a>
          <a href="http://www.northbridge.com/"><img src="https://d1mfvzd5g3mg00.cloudfront.net/dist/images/custlogos/northbridge-logo.png" className="customer-logo-generic" height="50" alt="NorthBridge"/></a>
        </div>
      </div>
    </section>
  )
}

export default SectionLogo;