import React from 'react';
import getAllStarships from './services/sw-api';

function StarshipCard({ starShipCards }) {
  // const handleClick = () => {
  //   getAllStarships(starShipCards);
  // };

  return (
    <div className="starship">
      <div className="starshipcards">
        {starShipCards.map((starShipCards) => {
          return (
            <>
              <h2
                className="starship-1"
                key={starShipCards.name}
                // onClick={handleClick}
              >
                {starShipCards.name}
              </h2>

              {/* <p className="details"> Model : {starShipCards.model}</p>
              <p className="details">
                Manufacturer : {starShipCards.manufacturer}
              </p>
              <p className="details"> Crew : {starShipCards.crew}</p>
              <p className="details">Passengers : {starShipCards.passengers}</p> */}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default StarshipCard;
