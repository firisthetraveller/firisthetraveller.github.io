import Tag from "./Tag";

const Tags = (props) => {
  const tags = props.tags;

  return (
    <ul className="article-tag">
      {
        tags.map((tag, index) => (
          <Tag key={index}> {tag}</Tag>
        ))
      }
    </ul >
  );
}

export default Tags;
