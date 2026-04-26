import ProjectItem from "./ProjectItem";
import { projectList } from "../data/projectList";

export default function ProjectList() {
    return (
        <div>
            {projectList.map(list => (
                <ProjectItem 
                    key={list.id} 
                    title={list.title}
                    src={list.thumb}
                    alt={list.title}
                    info={list.info}
                    detail={list.detail}
                    liveURL={list.liveURL}
                    githubURL={list.githubURL}
                />
            ))}
        </div>
    )
}
