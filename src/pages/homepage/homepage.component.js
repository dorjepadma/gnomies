
import GardenGnome from '../../assets/images/GardenGnome.jpeg'
import { Container } from 'react-bootstrap'
import GnomeLaughing from '../../assets/audio/Gnome-Laughing.mp3'


import './homepage.styles.css';

function Homepage() {
  return (
    <div>
      <Container className='jumbotronContainer'>
        <h1 >
          Gnomies
        </h1>
      </Container>
      <div className="App-header">
        <img src={GardenGnome} className="fade-out" alt="GardenGnome" />
          <br />
          <p>
            <strong>
            Legend has it they were Gnomes. 
            </strong>
          </p>
      </div>
      <audio controls
      allow="autoplay"
      className='Gnome'
      id="GnomeLaughter"
      component="audio"
      autoPlay='true'
      hidden >
        <source src={GnomeLaughing} type="audio/mpeg" volume='0.5'/>
      </audio>
    </div>
  );
}

export default Homepage;
