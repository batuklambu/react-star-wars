const url = 'https://swapi.dev/api/starships';

const getAllStarships = async () => {
  console.log(getAllStarships);
  try {
    const response = await fetch(url);
    const starShipCards = await response.json();
    return starShipCards;
  } catch (error) {
    console.log(error);
  }
};

export default getAllStarships;
