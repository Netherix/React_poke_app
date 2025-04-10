const Sorting = ({ setSortBy, types, setFilterType }) => {
  return (
    <>
      {/* Dropdown for filtering by type */}
      <select onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      
      {/* Dropdown for sorting by property */}
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Default</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="hp">HP</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
        <option value="specialAttack">Special Attack</option>
        <option value="specialDefense">Special Defense</option>
        <option value="speed">Speed</option>
      </select>
    </>
  );
};

export default Sorting;
