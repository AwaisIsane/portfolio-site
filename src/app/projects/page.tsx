// Font files can be colocated inside of `pages`
import ProjectComponent from "./ProjectComponent";
import { getProjects } from "../utils";

export default function ProjectList() {
  const projects = getProjects();
  return (
    <ul>
      {projects.map((proj, i) => (
        <ProjectComponent key={i} project={proj} />
      ))}
    </ul>
  );
}
