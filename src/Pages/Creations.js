import { useState } from 'react';
import Filters from '../Components/Filters';
import ItemList from '../Components/ItemList';
import useFetch from '../Hooks/useFetch';

const Creations = ({ defaultFilter }) => {
  const { data: items, isPending, error } = useFetch("http://localhost:8000/articles");
  const [filterName, setFilterName] = useState((defaultFilter) ? defaultFilter : "");

  // For selected options :
  // https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react
  function handleChange(e) {
    const value = e.target.value;
    setFilterName(value);
  }

  return (
    <>
      {items &&
        <>
          <Filters filters={items.map((item) => (item.tags)).flat()} onChange={handleChange} />
          <ItemList items={items.filter((item) => (filterName === "" || item.tags.includes(filterName)))} />
        </>
      }
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
    </>
  );
}

export default Creations;
