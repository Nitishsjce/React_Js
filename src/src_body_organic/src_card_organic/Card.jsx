import React from 'react'
import '../../../css_organic/css_body_organic/css_card_organic/Card.css'

const Card = ({card_backgroundImage,title,card_description,learn_more})  => {
  return (
    <div className="card-container">
      <div className="card" style={{ backgroundImage: `url(${card_backgroundImage})` }}>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{card_description}</p>
        <button className="card-button">{learn_more}</button>
      </div>
    </div>
  </div>
  )
}

export default Card