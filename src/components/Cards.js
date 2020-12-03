import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/masjid.gif';
import img2 from '../images/rosegarden.jpg';
import img3 from '../images/school.jpg';
import img4 from '../images/mall.jpg';
import img5 from '../images/park.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Upcoming Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='An idea for a beautiful place of worship for the Muslims.'
              label='Masjid'
            />
            <CardItem
              src={img2}
              text='A scenic and serene rose garden presenting all different colors of roses.'
              label='Rose Garden'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Top notch High School in your vicinity.'
              label='High School'
            />
            <CardItem
              src={img4}
              text='A deluxe shopping plaza.'
              label='Shopping Mall'
            />
            <CardItem
              src={img5}
              text='Park for an evening walk and picnic with your family.'
              label='Central Park'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;