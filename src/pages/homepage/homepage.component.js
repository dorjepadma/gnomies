import React from 'react';
import { Container } from 'react-bootstrap'
import ComingSoon from '../../Components/ComingSoon/ComingSoon.component';
import ScytheGnome from '../../assets/images/scytheGnome2.png'


import './homepage.styles.scss';

function Homepage() {

  return (
    <div>
      <Container className='jumbotronContainer'>
        <p className='jumboBanner' >
          Gnomies
        </p>
      </Container>
      <div className="body">
        <img src={ScytheGnome} className="fade-out" alt="GardenGnome" />
        <div>
        <p className='fadeInText'>
            <strong>
            Legend has it they were Gnomes. 
            </strong>
          </p>

        </div>
  <ComingSoon />
      </div>
    </div>
  );
}

export default Homepage;
