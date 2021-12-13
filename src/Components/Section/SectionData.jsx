import React from 'react';
import '../../Sass/SectionData.scss';

const SectionData = () => {
  return (
    <section className="sect-data page-section sidetext-section background-dark">
      <div className="container">
        <div className="row title-row mb-5">
          <div className="col-xs-12">
            <h1>Using Data You Can Trust</h1>
          </div>
        </div>

        <div className="row content-row justify-content-between mb-5">
          <div className="col-xs-12 col-sm-6 data-details mt-5">
            <h5>Where We Get Our Data</h5>
            <p className="lead">We leverage machine learning, web crawlers, primary sources, and natural language processing to extract data from millions of news articles and websites daily.</p>
            <br />
            <p className="lead">Our team of in-house analysts verify the data every day - so you can close deals with conviction.</p>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-offset-1 col-lg-5 data-image mt-5">
            <img src="https://s21870.pcdn.co/wp-content/themes/mm-landing-page/assets/images/mm_data_diagram.svg" alt="Data Sources Diagram" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionData;