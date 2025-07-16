import React from 'react'
import useCreateProject from '../hooks/apis/mutations/useCreateProject'
 
import {Button , Layout, Row, Col} from "antd";
import { useNavigate } from 'react-router-dom';
const CreateProject = () => {
    const {createProjectMutation}=useCreateProject();
    const navigate =useNavigate();
async  function handleCreateProject(){
     try {
       const response= await createProjectMutation();
       navigate(`/project/${response.data}`);
        
     } catch (error) {
        console.log(error);
     }
  }  
  return (

    <div>
      <div>
         <h2>Create React Project</h2>
      </div>
      <button onClick={handleCreateProject} >
      Create Project React </button>
    </div>
  )
}

export default CreateProject;