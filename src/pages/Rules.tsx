import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Rules.scss';

export default function Rules() {
  return (
    <>
      <div className="rules-container">
        <Link to="/" className="button-back back">
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
          />
        </Link>
        <div className="rules-wrapper">

          <div className="rules-header">
            <h2>
              The game is an expansion on the game Rock, Paper, Scissors.
              <br />
              Each player picks a variable and reveals it at the same time.
              <br />
              The winner is the one who defeats the others.
              <br />
              In a tie, the process is repeated until a winner is found.
            </h2>
            <br />
            <h2>
              Scissors cuts Paper
              <br />
              Paper covers Rock
              <br />
              Rock crushes Lizard
              <br />
              Lizard poisons Spock
              <br />
              Spock smashes Scissors
              <br />
              Scissors decapitates Lizard
              <br />
              Lizard eats Paper
              <br />
              Paper disproves Spock
              <br />
              Spock vaporizes Rock
              <br />
              (and as it always has) Rock crushes Scissors
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
