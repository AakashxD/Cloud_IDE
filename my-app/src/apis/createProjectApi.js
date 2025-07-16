import axiosInstance from "../config/axiosConfig";
const createProjectApi=async()=>{
    try {
        const response= await axiosInstance.post('/api/v1/project');
        console.log("data is fetched");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}
export default createProjectApi;