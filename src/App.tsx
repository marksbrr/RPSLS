import {
  Routes, Route, Link,
} from 'react-router-dom';
import './App.scss';
import Game from './pages/Game';
import Rules from './pages/Rules';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="">
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </>
      </div>
    </>
  );
}
export default App;
