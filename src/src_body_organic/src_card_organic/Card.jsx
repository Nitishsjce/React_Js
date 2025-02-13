import React from 'react'
import '../../../css_organic/css_body_organic/css_card_organic/Card.css'

const Card = ({title,card_description,learn_more}) => {
  return (
    <div className='cardName'>
       {/* <img src='../../../images/body_image/Vegetables.jpg' alt='vegetable-image' className='imgMain'/>  */}
       
       <h1 className='cardTitle'>{title}</h1>
       <p className='cardDescription'>{card_description}</p>
       <a href='' className='cardLearnMore'>{learn_more}</a>
    </div>
  )
}

export default Card