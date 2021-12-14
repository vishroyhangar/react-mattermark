import React from 'react';
import '../Sass/CardContent.scss';

const CardContent = ({ title, paragraph, link, image, classes }) => {
  return (
    <div className={`row content ${classes}`}>
      <div class="col-xs-12 col-sm-6 column">
        <h3>{title}</h3>
        <p class="lead">{paragraph} <a href={link}>Learn More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></p>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-5 column">
        <img class="informed" src={image} alt="Stay Informed"/>
      </div>
    </div>    
  )
}

export default CardContent
