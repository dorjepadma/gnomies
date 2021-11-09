
import GardenGnome from './assets/images/GardenGnome.jpeg'
import { Container } from 'react-bootstrap'
import Footer from './Components/footer/footer.component'


import './App.css';

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
