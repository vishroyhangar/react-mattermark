import React from 'react';
import '../Sass/CardProfessional.scss';

const CardProfessional = ({id, title, description, image, background}) => {
  return (
    <div className="col-xs-12 col-sm-4" key={id}>
      <figure className="investors">
        <img src={image} alt="background-image" />
        <figcaption style={{backgroundColor: `${background}`}}>
          <h5>{title}</h5>
          <p>{description}</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default CardProfessional;