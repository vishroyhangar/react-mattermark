import React from 'react';
import '../../Sass/SectionContent.scss';
import CardContent from '../CardContent';


const SectionContent = () => {
  let data = [
    {
      id: 1,
      title: 'Automatically Enrich Leads In Salesforce',
      paragraph: 'Get actionable insights by syncing over 80 informative fields to help warm leads and power conversations from first touch to deal close. Get all the relevant information from inside Salesforce, and apply triggers and actions to any lead, opportunity, or other object.',
      link: 'https://mattermark.com/salesforce/',
      image: 'https://d1mfvzd5g3mg00.cloudfront.net/dist/images/home-valuesection-salesforce.png',
      classes: ''
    },
    {
      id: 2,
      title: 'Customize Your Experience With API',
      paragraph: 'Our API provides data on millions of companies. In just minutes, you can integrate Mattermark with your products, systems, and business processes. Create your own models and scoring algorithms to fit your business.',
      link: 'https://mattermark.com/api/',
      image: 'https://d1mfvzd5g3mg00.cloudfront.net/dist/images/home-valuesection-api.png',
      classes: 'flex-row-reverse'
    }
  ]


  return (
    <>
      {
        data.map(({title, ...content}) => {
          return(
            <section className="sect-content">
              <div className="container">
                <CardContent title={title} {...content} />
              </div>
            </section>
          )
        })
      }
    </>
  )
}

export default SectionContent;