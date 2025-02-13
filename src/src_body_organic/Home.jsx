import React from 'react'
import '../../css_organic/css_body_organic/Home.css'
import Card from './src_card_organic/Card'

function Home() {
  return (
    <div className='cardRow'>
      <Card title="Vegetable" card_description="Vegetable is good for health" learn_more="Learn More" />
      <Card title="Non Veg" card_description="Non Veg is good for health" learn_more="Learn More" />
      <Card title="Fruits" card_description="Fruits is good for health" learn_more="LearnMore" />
      <Card title="Grains" card_description="Grains is good for health" learn_more="Learn More" />
      <Card title="Spices" card_description="Spices is good for health" learn_more="Learn More" />
      <Card title="Dairy Products" card_description="Dairy Products is good for health" learn_more="Learn More" />
      <Card title="Agri Tools" card_description="Agri Tools is good for health" learn_more="Learn More" />
      <Card title="Soil Manure" card_description="Soil Manure is good for health" learn_more="Learn More" />
      <Card title="Knowledge" card_description="Knowledge is good for health" learn_more="Learn More" />
      <Card title="Commercial" card_description="Commercial" learn_more="Learn More" />
      <Card title="Grains" card_description="Commercial" learn_more="Learn More" />
      <Card title="Grains" card_description=" is good for health" learn_more="Learn More" />
    </div>
    
  )
}

export default Home