import ProjectItems from "./ProjectItems"
import { projectLists } from "../data/projectList"

export default function ProjectList() {
  return (
    <div>
      {projectLists.map((project) => (
        <ProjectItems key={project.id} project={project} />
      ))}
    </div>
  )
}
