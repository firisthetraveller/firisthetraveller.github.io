import { Link } from "react-router";
import { localeText } from "../helpers/lang";
import useCollection from "../hooks/useCollection";

const Projects = () => {
    const { data, isPending } = useCollection("projects");

    return !isPending && (
        <main className="flex flex-col gap-4">
            <div>
                <h3>Projects</h3>
                <p>A showcase of different projects I've done.</p>
            </div>
            <div className="projects">
                {data && data.map((p, i) => (
                    <Link key={i} to={`/projects/${p.id}`}>
                        <div className="parent">
                            <div className="child">
                                <h3>{localeText(p.title)}</h3>
                                <p>{localeText(p.description)}</p>
                            </div>
                            {p.images ? <img src={p.images[0]} /> : <p>No image available</p>}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Projects;