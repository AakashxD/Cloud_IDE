import React from "react";
import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent";
import TreeStructure from "../components/organisms/TreeStructure/TreeStructure";
import { useEffect } from "react";
import { useTreeStructureStore } from "../store/treeStructureStore";
const ProjectPlayground = () => {
  const { projectId:projectIdfromUrl} = useParams();
  const {setProjectId,projectId}=useTreeStructureStore();
  useEffect(()=>{
    setProjectId(projectIdfromUrl);
  },[]);

  return (
    <>
      <div>
       
      <h2> ProjectPlayground Project :{projectIdfromUrl}</h2>
      {projectId && <TreeStructure />}
        <EditorComponent />
      </div>

    </>
  );
};

export default ProjectPlayground;
