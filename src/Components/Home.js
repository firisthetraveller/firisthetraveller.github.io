import Filters from './Filters';
import ItemList from './ItemList';

const Home = () => {
  const items = [
    { title: "Infinitimac 2024", description: "Modélisation 3D", tags: ["3D", "Animation"], id: 1 },
    { title: "Paysage macabre", description: "48h du court métrage, édition 2022", tags: ["Court-métrage", "Défi"], id: 2 },
    { title: "L'Appel", description: "25h de la BD, édition 2022", tags: ["BD", "Défi"], id: 3 },
  ];

  const allFilters = items.map((item) => (item.tags)).flat();

  return (
    <div className="content">
      <Filters filters={allFilters} />
      <ItemList items={items} />
    </div>
  );
}

export default Home;
