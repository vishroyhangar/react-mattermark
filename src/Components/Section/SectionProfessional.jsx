import React from 'react';
import '../../Sass/SectionProfessional.scss';
import CardProfessional from '../CardProfessional';

const SectionProfessional = () => {
  let cardData = [
    {
      id: 1,
      title: 'Investors',
      description: 'Surface new companies and better deals, faster.',
      image: 'https://d1mfvzd5g3mg00.cloudfront.net/dist/images/investors.jpg',
      background: 'rgba(0,188,212,.5)'
    },
    {
      id: 2,
      title: 'Sales / BD',
      description: 'Dramatically reduce prospecting time and identify future customers with Mattermark.',
      image: 'https://d1mfvzd5g3mg00.cloudfront.net/dist/images/sales.jpg',
      background: 'rgba(54,169,225,.5)'
    },
    {
      id: 3,
      title: 'Professional Services',
      description: 'Research markets, understand competitive landscapes, and deliver to clients quicker.',
      image: 'https://d1mfvzd5g3mg00.cloudfront.net/dist/images/profservices.jpg',
      background: 'rgba(53,110,138,.5)'
    }
  ]


  
  return (
    <section className="sect-professional">
      <div className="container">
        <div className="row title-row">
          <div className="col-xs-12">
            <h1>Deal Professionals Use Our Data</h1>
          </div>
        </div>

        <div className="row customer-type-grid mt-5">
          {
            cardData.map(({id, ...data}) => {
              return <CardProfessional key={id} {...data}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default SectionProfessional;