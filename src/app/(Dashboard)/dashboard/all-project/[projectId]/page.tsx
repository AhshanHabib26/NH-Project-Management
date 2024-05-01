import React from "react";

interface IParams {
  projectId: string;
}

interface IProps {
  params: IParams;
}

const ProjectDetails: React.FC<IProps> = ({ params }) => {
  const { projectId } = params;

  return (
    <div>
      <h1>{projectId}</h1>
    </div>
  );
};

export default ProjectDetails;
