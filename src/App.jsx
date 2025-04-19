import fetchPokemon from "./api/fetchPokemon"
import Sorting from './components/Sorting/Sorting'
import { useState, useEffect } from 'react'

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      const newTypes = [...new Set(data.flatMap((poke => poke.types)))]
      setTypes(newTypes)
    }
    getPokemon();
  }, [])

  console.log(pokemon)
  console.log(types)

  let sortedPokemon = [...pokemon]

  // type sorting logic
  if (selectedType) {
    sortedPokemon = sortedPokemon.filter((poke) => poke.types.includes(selectedType))
  };

  // stat and alphabetical sorting logic
  if (sortBy==='alphabetical') {
    sortedPokemon.sort((a,b) => a.name.localeCompare(b.name))
  } else if (sortBy) {
    sortedPokemon.sort((a,b) => b[sortBy] - a[sortBy])
  }

  return (
    <>
      <Sorting
        setSelectedType={setSelectedType}
        setSortBy={setSortBy}
        types={types}
      />

      {sortedPokemon.map((poke) => (
        <div key={poke.name}>
          <p>{poke.name}</p>
          <img
            src={poke.image}
          />
        </div>
      ))}
    </>
  )
}

export default App