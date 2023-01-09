import Title from "./Title";

const ItemList = (props) => {
  const { items } = props;

  return (
    <div className="item-list">
      {
        items.map((item) => (
          <div className="item-preview" key={item.id}>
            <Title order={2}>{item.title}</Title>
            <p>{item.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default ItemList;
