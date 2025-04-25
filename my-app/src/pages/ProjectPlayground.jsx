import React from 'react'
import { useParams } from 'react-router-dom'
import EditorComponent from '../components/molecules/EditorComponent';
const ProjectPlayground = () => {
    const {projectId}=useParams();
  return (
    <>
    <div>ProjectPlayground
            Project :{projectId}
           
    </div>
     <div>
     <EditorComponent/>
     </div>
     </>
    
  )
}

export default ProjectPlayground