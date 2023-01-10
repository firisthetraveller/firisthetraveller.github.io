import Tags from "./Tags";
import Title from "./Title";

const ItemList = (props) => {
  const { items } = props;

  function dateParser(d) {
    let from = d.split("/");
    return new Date(from[2], from[1] - 1, from[0]);
  }

  return (
    <div className="item-list">
      {
        items.sort((a, b) => (dateParser(b.date) - dateParser(a.date))).map((item) => (
          <div className="item-preview" key={item.id}>
            <Title order={2}>{item.title}</Title>
            <p>{item.description}</p>
            <Tags tags={item.tags} />
          </div>
        ))
      }
    </div>
  );
}

export default ItemList;
