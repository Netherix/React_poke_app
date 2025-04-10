import { useState, useEffect } from "react";
import fetchPokemon from "./api/fetchPokemon";
import Sorting from "./components/Sorting/Sorting";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchPokemon();
      setPokemon(data);

      const newTypes = [...new Set(data.flatMap((p) => p.type))];
      setTypes(newTypes);
    };
    getPokemon();
  }, []);

  let sortedPokemon = [...pokemon];

  if (sortBy === 'alphabetical') {
    sortedPokemon.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy) {
    sortedPokemon.sort((a, b) => b[sortBy] - a[sortBy]);
  }

  // Filter by type
  if (filterType) {
    sortedPokemon = sortedPokemon.filter((poke) => poke.type.includes(filterType));
  }

  return (
    <>
      <Sorting
        setSortBy={setSortBy}
        types={types}
        setFilterType={setFilterType} 
      />

      {sortedPokemon.map((poke) => (
        <div key={poke.name}>
          <p>{poke.name}</p>
          <img src={poke.image} alt={poke.name} />
        </div>
      ))}
    </>
  );
};

export default App;
