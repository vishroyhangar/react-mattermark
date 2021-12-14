import React from 'react';
import '../Sass/CardContent.scss';

const CardContent = ({ title, paragraph, link, image, classes }) => {
  let linkText = <a href={link}>Learn More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>

  return (
    <div className={`row content ${classes}`}>
      <div className="col-xs-12 col-sm-6 column">
        <h3>{title}</h3>
        <p className="lead">
          {paragraph + ' '}
          {
            link ? linkText : ''
          }
        </p>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-5 column">
        <img className="informed" src={image} alt="Stay Informed"/>
      </div>
    </div>    
  )
}

export default CardContent
