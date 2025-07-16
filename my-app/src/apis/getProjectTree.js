import axiosInstance from "../config/axiosConfig";
export const getProjectTree=async({projectId})=>{
    try {
        const response=await axiosInstance.get(`/api/v1/project/tree/${projectId}`);
        console.log(response);
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}