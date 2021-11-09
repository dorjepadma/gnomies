
import GardenGnome from './assets/images/GardenGnome.jpeg'
import { Fade } from 'react-bootstrap'
import Footer from './Components/footer/footer.component'
import './App.css';

function App() {
  return (
    <div>
      <div className="App-header">

        <h1 >
          Gnomies
        </h1>
        <Fade in={true}>
         
        <img src={GardenGnome} className="fade-out" alt="GardenGnome" />
        </Fade>
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
