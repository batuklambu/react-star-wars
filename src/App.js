import './App.css';
import { useEffect, useState } from 'react';
import getAllStarships from './components/services/sw-api';
import StarshipCard from './components/StarShipCard';

function App() {
  const [starShipCards, setStarShipCards] = useState([]);

  useEffect(() => {
    getAllStarships().then((data) => {
      setStarShipCards(data.results);
    });
  }, []);

  return (
    <main className="App">
      <div className="title">
        <h1>STAR WARS STARSHIPS</h1>
      </div>
      <StarshipCard starShipCards={starShipCards} />
    </main>
  );
}

export default App;
