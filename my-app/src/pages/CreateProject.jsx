import React from 'react'
import useCreateProject from '../hooks/apis/mutations/useCreateProject'
const CreateProject = () => {
    const {createProjectMutation}=useCreateProject();
async  function handleCreateProject(){
     try {
        await createProjectMutation();
     } catch (error) {
        console.log(error);
     }
  }
  return (
    <div>CreateProject
        <button onClick={handleCreateProject}
        >Create Project React</button>
    </div>
  )
}

export default CreateProject;