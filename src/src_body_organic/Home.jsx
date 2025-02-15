import React from 'react'
import '../../css_organic/css_body_organic/Home.css'
import Card from './src_card_organic/Card'
import vege from '../../images/body_image/vegetables.jpg'


function Home() {
  return (
    <div className='cardRow'>
      <Card card_backgroundImage = {''} title="Vegetable" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Non Veg" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Fruits" card_description="Vegetable is good for health please do eat" learn_more="LearnMore" />
      <Card  card_backgroundImage = {''} title="Grains" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Spices" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Dairy Products" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Agri Tools" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Soil Manure" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Knowledge" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Commercial" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Grains" card_description="Vegetable is good for health please do eat" learn_more="Learn More" />
      <Card  card_backgroundImage = {''} title="Grains" card_description="Vegetable is good for health please do eat" learn_more="Learn More" /> 
    </div>
    
  )
}

export default Home