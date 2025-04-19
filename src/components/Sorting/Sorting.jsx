const Sorting = ({ types, setSelectedType, setSortBy }) => {
  return (
    <>
      {/* type dropdown */}
      <select onChange={(e) => setSelectedType(e.target.value)}>
        <option value=''>All Types</option>
        {types.map((type) => (
          <option value={type}>{type}</option>
        ))}
      </select>

      {/* dropdown for alphabetical, default, stats */}
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value=''>Default</option>
        <option value='alphabetical'>Alphabtical</option>
        <option value='hp'>HP</option>
        <option value='attack'>Attack</option>
        <option value='defense'>Defense</option>
        <option value='specialAttack'>Special Attack</option>
        <option value='specialDefense'>Special Defense</option>
        <option value='speed'>Speed</option>
      </select>
    </>
  )
}

export default Sorting