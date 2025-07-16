import { QueryClient } from "@tanstack/react-query";
import {create} from "zustand";
import { getProjectTree } from "../apis/getProjectTree";
export const useTreeStructureStore=create((set,get)=>{
    const queryClinet=new QueryClient();
       return {
           treeStructure:null,
           projectId:null,
           setTreeStructure:async ()=>{
              const id=get().projectId;
               const data=await queryClinet.fetchQuery({
                queryKey:[`projecttree-${id}`],
                queryFn:()=> getProjectTree({projectId:id}),
               })
               console.log("inside")
               console.log(data.data);
               set({
                treeStructure:data.data
               })
           },
           setProjectId:(projectId)=>{
            set({
                projectId:projectId
            })
           }
           
       }
})