import { useLoaderData } from "react-router";
import { localeText } from "../../helpers/lang";
import getDocument from "../../hooks/getDocument";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export async function clientLoader({ params }) {
    const infos = await getDocument("projects", params.id);
    const details = await getDocument("project-details", params.id);
    return { infos, details };
}

const ProjectDetails = () => {
    let { infos, details } = useLoaderData();

    return (infos || details) && (
        <main className="flex flex-col gap-8">
            <div className="flex gap-2 items-center">
                <h3>{localeText(infos.title)}</h3>
                {infos.github && <a href={infos.github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>}
                {infos.url && <a href={infos.url} target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>}
            </div>
            {details && details.content && details.content.map(c => (
                <p>{c}</p>
            ))}

            {/** Tags - Powered by */}
            <div className="flex flex-col">
                <p>Powered by:</p>
                <div className="flex gap-4">
                    {infos.tags.map(t => <span>{t}</span>)}
                </div>
            </div>
        </main>
    );
}

export default ProjectDetails;