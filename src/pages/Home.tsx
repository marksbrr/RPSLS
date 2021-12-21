import { Link } from 'react-router-dom';
import '../App.scss';

const Home = () => (
  <div className="App">
    <div className="App-header">
      <h1 className="game-header">Welcome to Rock-Paper-Scissors-Lizard-Spock!</h1>
    </div>
    <div className="app-button-container">
      <Link to="/game" className="button-play">Play a game</Link>
      <Link to="/rules" className="button-rules">Read the rules</Link>
    </div>
    <div className="app-image-container" />
  </div>
);

export default Home;
