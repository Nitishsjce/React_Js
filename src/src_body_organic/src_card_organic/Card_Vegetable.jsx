import React from 'react'
import '../../../css_organic/css_body_organic/css_card_organic/Card_Vegetable.css'

function Card_Vegetable() {
  return (
     <div className='cardVegetable'>
          <img src='../../../images/body_image/Vegetables.jpg' alt='vegetable-image' className='imgVegetable'/>
          <h1 className='cardTitle'>Vegetables</h1>
          <p className='cardDescription'>Vegetables Description</p>
          <a href='' className='cardLearnMore'>Learn More</a>
     </div>
  )
}

export default Card_Vegetable