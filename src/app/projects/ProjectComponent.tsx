import React from "react";
import { Posts } from "../utils";
import { CustomMDX } from "../CustomMdxComponent";

interface Props {
  project: Posts;
}

const ProjectComponent: React.FC<Props> = ({ project }) => {
  return (
    <div className="border-dashed	border-t-2 border-black py-8">
      <CustomMDX source={project.content} />
    </div>
  );
};

export default ProjectComponent;
