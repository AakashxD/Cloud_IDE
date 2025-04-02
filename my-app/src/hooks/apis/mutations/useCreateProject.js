import { useMutation } from "@tanstack/react-query";
import createProjectApi from "../../../apis/createProjectApi";

 function useCreateProject(){
    const {mutateAsync,isError,isPending,error}=useMutation(
        {
            mutationFn:createProjectApi,
            onSuccess:()=>{console.log("project created successfully")},
            onError:()=>{console.log("error while creating the project")},
        }
    )
    return {
        createProjectMutation:mutateAsync,isError,isPending,error
    }
     
}
export default useCreateProject;