import { useLoaderData } from "react-router";
import { localeText } from "../../helpers/lang";
import getDocument from "../../hooks/getDocument";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faNode, faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export async function clientLoader({ params }) {
    const infos = await getDocument("projects", params.id);
    const details = await getDocument("project-details", params.id);
    return { infos, details };
}

const Icon = ({ name, icon, faIcon, noname = false }) => {
    return (
        <div className="flex items-center cursor-pointer min-h-11 gap-1">
            {icon && <img src={icon} alt={name} width={noname ? 32 * 3 : 32} height={32} aria-label={`icon for ${icon}`} />}
            {faIcon && <FontAwesomeIcon icon={faIcon} size="2x" />}
            {!noname && <p>{name}</p>}
        </div>
    )
}

const skills = {
    "React": { name: "React", faIcon: faReact },
    "React Native": { name: "React Native", faIcon: faReact },
    "Python": { name: "Python", faIcon: faPython },
    "Node": { name: "Node", faIcon: faNode },
    "Firebase": { name: "Firebase", icon: `/assets/icons/firebase.svg`, noname: true },
    "VueJS": { name: "VueJS", faIcon: faVuejs },
    "Tailwind": { name: "Tailwind", icon: `/assets/icons/tailwind.svg`, noname: true },
}

const hidden = ["Mentoring"]

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
                <div className="flex items-center gap-4">
                    {infos.tags.filter(t => !hidden.includes(t)).map(t => (skills[t] ? <Icon name={skills[t].name} icon={skills[t].icon} faIcon={skills[t].faIcon} noname={skills[t].noname} /> : <span>{t}</span>))}
                </div>
            </div>
        </main>
    );
}

export default ProjectDetails;