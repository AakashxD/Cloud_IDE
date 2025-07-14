import { createProjectService,getProjectTree } from "../service/projectService.js";
export const createProjectController = async (req, res) => {
    try {
        const projectId=await createProjectService();
        return res.status(200).json({ message: "Project created", data: projectId });
    } catch (error) {
        console.error("Error creating project:", error);
        return res.status(500).json({ message: "Error creating project", error: error.message });
    }
};
export const getProjectTreeController=async(req,res)=>{
    const projectTree=await getProjectTree(req.params.projectId);
    return res.status(200).json({data: projectTree,success:true,  message: "Project Tree created", });
}
 