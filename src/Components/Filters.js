const Filters = ({ filters, onChange }) => {
  const uniqueFilters = [...new Set(filters)];

  return (
    <>
      <label htmlFor="filter">Filters: </label>
      <select name="filter" onChange={onChange} defaultValue="">
        <option value="">---</option>
        {
          uniqueFilters.sort().map((filter) => (
            <option value={filter} key={filter}>{filter}</option>
          ))
        }
      </select>

    </>
  );
}

export default Filters;
