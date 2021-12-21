import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button/Button';
import './Game.scss';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [cpuChoice, setCpuChoice] = useState('');
  const [winner, setWinner] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  const choices = [
    {
      title: 'Rock',
      color: 'gold',
    },
    {
      title: 'Paper',
      color: 'green',
    },
    {
      title: 'Scissors',
      color: 'white',
    },
    {
      title: 'Lizard',
      color: 'green',
    },
    {
      title: 'Spock',
      color: 'gold',
    }];

  const result = () => {
    if (playerChoice === 'Rock' && cpuChoice === 'Scissors') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Rock' && cpuChoice === 'Lizard') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Rock' && cpuChoice === 'Paper') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Rock' && cpuChoice === 'Spock') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Rock' && cpuChoice === 'Rock') {
      setWinner('Draw');
    } else if (playerChoice === 'Paper' && cpuChoice === 'Spock') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Paper' && cpuChoice === 'Rock') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Paper' && cpuChoice === 'Scissors') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Paper' && cpuChoice === 'Lizard') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Paper' && cpuChoice === 'Paper') {
      setWinner('Draw');
    } else if (playerChoice === 'Scissors' && cpuChoice === 'Paper') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Scissors' && cpuChoice === 'Lizard') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Scissors' && cpuChoice === 'Rock') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Scissors' && cpuChoice === 'Spock') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Scissors' && cpuChoice === 'Scissors') {
      setWinner('Draw');
    } else if (playerChoice === 'Lizard' && cpuChoice === 'Paper') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Lizard' && cpuChoice === 'Spock') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Lizard' && cpuChoice === 'Rock') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Lizard' && cpuChoice === 'Scissors') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Lizard' && cpuChoice === 'Lizard') {
      setWinner('Draw');
    } else if (playerChoice === 'Spock' && cpuChoice === 'Scissors') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Spock' && cpuChoice === 'Rock') {
      setWinner('Win');
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === 'Spock' && cpuChoice === 'Paper') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Spock' && cpuChoice === 'Lizard') {
      setWinner('Lose');
      setCpuScore(cpuScore + 1);
    } else if (playerChoice === 'Spock' && cpuChoice === 'Spock') {
      setWinner('Draw');
    }
  };

  useEffect(() => {
    result();
  }, [cpuChoice, playerChoice]);

  const newCpuChoice = () => {
    setCpuChoice(choices.map((it) => it.title)[Math.floor(Math.random() * choices.length)]);
  };

  const newPlayerChoice = (value: string) => {
    setPlayerChoice(value);
    newCpuChoice();
  };

  const closeModal = () => {
    window.location.reload();
    setCpuScore(0);
    setPlayerScore(0);
  };

  return (
    <>
      <section className="game-container">
        <div className="game-wrapper">
          <Link to="/" className="button-back">
            <FontAwesomeIcon
              icon={faLongArrowAltLeft}
            />
          </Link>

          <h2 className="player-select-header">Choose your destiny!</h2>
          <h3 className="player-select-header2">First one to score 3 is the winner!</h3>

          <div className="player-select">
            {choices.map(({ title, color }) => (
              <Button
                key={title}
                title={title}
                style={{ borderColor: color }}
                onClick={() => newPlayerChoice(title)}
              />
            ))}
          </div>

          <div className="game-results">
            <div className="game-results-player">
              <div>
                You chose:  &nbsp;
                {playerChoice}
                 &nbsp;
              </div>
              <div>
                Your score:  &nbsp;
                {playerScore}
              </div>
            </div>

            <div className="game-results-progress">
              {winner === 'Win' && playerScore !== 3 ? <h2>Eureka! You just scored a point!</h2> : ''}
              {winner === 'Win' && playerScore > cpuScore ? <h2>Nice, you`re in the lead!</h2> : ''}
              {winner === 'Lose' && cpuScore !== 3 ? <h2>Bazinga! CPU just gained a point!</h2> : ''}
              {winner === 'Lose'
               && cpuScore === 2 && playerScore === 1 ? <h2>CPU is in the lead! Catch him!</h2> : ''}
              {winner === 'Lose' && cpuScore > playerScore ? <h2>You`re losing to a bot!</h2> : ''}
              {winner === 'Draw' && <h2>Draw! Keep going!</h2>}
            </div>

            <div className="game-results-cpu">
              <div className="game-choice">
                CPU chose:  &nbsp;
                {cpuChoice}
            &nbsp;
              </div>
              <div className="game-choice">
                CPU score:  &nbsp;
                {cpuScore}
              </div>
            </div>
            <div className="cpu-select">
              {choices.map(({ title, color }) => (
                <Button
                  key={title}
                  title={title}
                  style={{ borderColor: color }}
                  onClick={() => newPlayerChoice(title)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {playerScore === 3
         && (
         <section className="modal">
           <div className="modal-container">
             <div className="modal-wrapper">
               <span onClick={closeModal} className="modal-close">&times;</span>
               <div className="modal-content">
                 <h1>Boom ! You won! :)</h1>
               </div>
               <div className="modal-actions">
                 <Link to="/game" className="modal-button" onClick={closeModal}>
                   Play again
                 </Link>
               </div>
             </div>

           </div>
         </section>
         )}
      {cpuScore === 3
         && (
         <section className="modal">
           <div className="modal-container">
             <div className="modal-wrapper">
               <span onClick={closeModal} className="modal-close">&times;</span>
               <div className="modal-content">
                 <h1>Not boom, you lost! :(</h1>
               </div>
               <div className="modal-actions">
                 <Link to="/game" className="modal-button" onClick={closeModal}>
                   Play again
                 </Link>
               </div>
             </div>
           </div>
         </section>
         )}
    </>
  );
};
export default Game;
