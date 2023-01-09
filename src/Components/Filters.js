const Filters = ({ filters }) => {
  const uniqueFilters = [...new Set(filters)];

  return (
    <>
      <label htmlFor="filters">Filters</label>
      <select name="filters" id="filters" multiple>
        {
          uniqueFilters.map((filter) => (
            <option value={filter} key={filter}>{filter}</option>
          ))
        }
      </select>
    </>
  );
}

export default Filters;
