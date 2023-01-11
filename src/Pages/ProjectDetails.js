import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Components/useFetch";

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: item, isPending, error } = useFetch("http://localhost:8000/articles/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/articles/' + item.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/creations');
    })
  }

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {item && (
        <article className="article-details">
          <h2>Project details - {item.title}</h2>
          <h3>{item.description}</h3>
          <p>{item.date}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </>
  );
}

export default ProjectDetails;
