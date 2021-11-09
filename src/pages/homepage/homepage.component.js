
import GardenGnome from '../../assets/images/GardenGnome.jpeg'
import { Container, Button } from 'react-bootstrap'
import GnomeLaughing from '../../assets/audio/Gnome-Laughing.mp3'
import ScytheGnome from '../../assets/images/scytheGnome2.png'


import './homepage.styles.scss';

function Homepage() {
  let audio = new Audio('../../assets/audio/Gnome-Laughing.mp3');

  const start = () => {
    audio.play()
  }

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
       <Button className="jumboButton" src={GnomeLaughing} onClick={ () => audio.play() }> Coming Soon! </Button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
