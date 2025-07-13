import React from "react";
import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent";
const ProjectPlayground = () => {
  const { projectId } = useParams();
  return (
    <>
      <div>
      <h2> ProjectPlayground Project :{projectId}</h2>
        <EditorComponent />
      </div>
    </>
  );
};

export default ProjectPlayground;
